let wpapi = "https://blog-ecatering-cdn.ipsator.com";
let syapi = "https://aqd5dq1h.api.sanity.io/v2023-08-01/graphql/production/default"
export const callWpPostsData = async () => {
  let query = {
    query: `query{
          posts(first:53){
            nodes{
              title
              content
              excerpt
              slug
              date
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
              
             seo{
              canonical
              title
              metaDesc
              opengraphTitle
              opengraphDescription
              opengraphImage {
                sourceUrl
              }
             }
             author {
              node {
                avatar {
                  url
                }
                email
                name
                firstName
                lastName
              }
            }
            categories {
              edges {
                node {
                  name
                }
              }
            }
            tags {
              edges {
                node {
                  name
                }
              }
            }
            }
          }
        }`,
  };

  try {
    let data = await fetch(`${wpapi}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    });
    data = await data.json();
    data = data.data?.posts?.nodes;
    return data;
  } catch (error) {
    console.log(error);
  }
};
// let ans = callPostsData("posts").then((res) => console.log(res));

export const callWpPagesData = async () => {
  let query = {
    query: `query{
          pages(first:66){
            nodes{
              title
             content
              slug
              date
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
              
             seo{
              canonical
              title
              metaDesc
              opengraphTitle
              opengraphDescription
              opengraphImage {
                sourceUrl
              }
             }
             author {
              node {
                avatar {
                  url
                }
                email
                name
                firstName
                lastName
              }
            }
            
            }
          }
        }`,
  };
  try {
    let data = await fetch(`${wpapi}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    });
    data = await data.json();
    data = data.data?.pages?.nodes || data.data.posts?.nodes;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const callSyPagesData = async () => {
  let query = {
    query: `query{
            allPage(limit:70){
                _id
                _type
                _key
                title
                content
                slug{
                  current
                }
                featuredImage{
                  asset{
                    title
                    url
                    source{
                      url
                    }
                  }
                }
                date
                seo{
                  canonical
                  title
                  metaDesc
                  opengraphTitle
                  opengraphDescription
                  opengraphImage{
                    asset{
                      url
                    }
                  }
                }
                author{
                  avatar{
                    asset{
                      url
                    }
                  }
                  email
                  name
                  firstName
                  lastName
                }
              }
        }`
  }
  try {
    let data = await fetch(`${syapi}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer sk8HhNAnGx3OukfMFtuvUt805r5QIhyUGxR99jhzfzgc1nELOZTjsQE26A2bE4db2oabbZ92roNG24p9giLrivhebOMNCrJEMOiWxq2OKIcX3DDMOk3ZqKPeaQABff6jMlqqiWuOy3vET07dgf3TtST7ZxLYYf5oQXDO4Norz7ViOUEc4PfY"
      },
      body: JSON.stringify(query),
    });
    data = await data.json();
    data = data.data.allPage
    console.log(data.length)

    return data;
  } catch (error) {
    console.log(error);
  }
}
export const callSyPostsData = async () => {
  let query = {
    query: `query{
          allPost(limit:53){
              _id
              _type
              _key
              title
              content
              slug{
                current
              }
              featuredImage{
                asset{
                  title
                  url
                  source{
                    url
                  }
                }
              }
              date
              seo{
                canonical
                title
                metaDesc
                opengraphTitle
                opengraphDescription
                opengraphImage{
                  asset{
                    url
                  }
                }
              }
              author{
                avatar{
                  asset{
                    url
                  }
                }
                email
                name
                firstName
                lastName
              }
            
            tags{
              name
            }
            categories{
            name
            }
          }
      }`
  }
  try {
    let data = await fetch(`${syapi}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer sk8HhNAnGx3OukfMFtuvUt805r5QIhyUGxR99jhzfzgc1nELOZTjsQE26A2bE4db2oabbZ92roNG24p9giLrivhebOMNCrJEMOiWxq2OKIcX3DDMOk3ZqKPeaQABff6jMlqqiWuOy3vET07dgf3TtST7ZxLYYf5oQXDO4Norz7ViOUEc4PfY"
      },
      body: JSON.stringify(query),
    });
    data = await data.json();
    data = data.data.allPost
    console.log(data.length)
    return data;
  } catch (error) {
    console.log(error);
  }
}

callWpPostsData()

