
const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;

export async function getAllPosts() {
    const res = await fetch(cmsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query {
              posts {
                nodes {
                  id
                  title
                  slug
                  date
                  author {
                    node {
                      firstName
                      lastName
                      avatar {
                        url
                      }
                    }
                  }
                  featuredImage {
                    node {
                        sourceUrl
                        altText
                    }
                  }
                }
              }
            }
          `
        }),
        next: { revalidate: 60 },
    });

    const json = await res.json();
    const posts = json?.data?.posts?.nodes || [];
    return posts;
}

export async function getLatestPosts(limit = 3) {
    const res = await fetch(cmsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetLatestPosts($limit: Int!) {
            posts(first: $limit, where: { orderby: { field: DATE, order: DESC } }) {
              nodes {
                id
                title
                slug
                date
                author {
                  node {
                    firstName
                    lastName
                    avatar {
                      url
                    }
                  }
                }
                featuredImage {
                  node {
                    sourceUrl
                    altText
                  }
                }
              }
            }
          }
        `,
        variables: {
          limit,
        },
      }),
      next: { revalidate: 60 },
    });
  
    const json = await res.json();
    const posts = json?.data?.posts?.nodes || [];
    return posts;
  }

export async function getPostBySlug(slug) {

    const res = await fetch(cmsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
        query GetPostBySlug($slug: ID!) {
          post(id: $slug, idType: SLUG) {
            id
            title
            slug
            content
            date
            author {
                node {
                    firstName
                    lastName
                    avatar {
                        url
                    }
                }
            }
            featuredImage {
                 node {
                     sourceUrl
                     altText
                }
            }
          }
        }
      `,
            variables: { slug },
        }),
        next: { revalidate: 60 },
    });

    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error('Fehler beim Abrufen des Blogposts');
    }
    return json.data.post;
}

export async function getPostSEOtBySlug(slug) {

    const res = await fetch(cmsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
        query GetPostBySlug($slug: ID!) {
          post(id: $slug, idType: SLUG) {
            id
            seo {
                title
                metaDesc
            }
          }
        }
      `,
            variables: { slug },
        }),
        next: { revalidate: 60 },
    });

    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error('Fehler beim Abrufen des Blogposts');
    }
    return json.data.post;
}