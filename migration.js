import { callSyPagesData, callSyPostsData, callWpPagesData, callWpPostsData } from "./getData.js";

const migratePages = async () => {
    let wordpressData = await callWpPagesData();
    let sanityData = await callSyPagesData()
    let mutation = []
    wordpressData.forEach(el => fillingThePagesData(el, mutation, sanityData))
}
const fillingThePagesData = async (data, mutation, sanityData) => {
    let obj = {
        title: data.title.toString(),
        content: data.content,
        slug: {
            current: data.slug,
        },
        date: data.date,
        featuredImageUrl: {
            asset: {
                url: data.featuredImage?.node?.sourceUrl || "",
                title: data?.featuredImage?.node?.altText || "",
            }
        },
        seo: {
            title: data.seo.title,
            canonical: data.seo.canonical,
            metaDesc: data.seo.metaDesc,
            opengraphTitle: data.seo.opengraphTitle,
            opengraphImage: {
                asset: {
                    url: data.seo?.opengraphImage?.sourceUrl || "",
                }
            },
            opengraphDescription: data.seo.opengraphDescription || "",
        },

        author: {
            avatar: {
                asset: {
                    url: data.author.node.avatar.url,
                }
            },
            email: data.author.node.email,
            name: data.author.node.name,
            firstName: data.author.node.firstName,
            lastName: data.author.node.lastName,
        },
    };
    let element = sanityData.find(el => {
        // console.log(el.slug.current,obj.slug)
        return el?.slug?.current == obj.slug.current
    });
    let mutations;
    if (!element) {
        mutations = [{
            create: {
                _id: "page.",
                _type: "page",
                ...obj
            }
        }];
    } else {
        mutations = [{
            createOrReplace: {
                _id: `${element._id}`,
                _type: "page",
                ...obj
            }
        }]
    }
    try {
        let data = await fetch(`https://aqd5dq1h.api.sanity.io/v2023-08-01/data/mutate/production`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
                "Authorization": "Bearer skLwBDEMK7DJ6q0shyonMT7vl1SDRYmVw6Jt4im3vZENITWGK9D98mDf9lvZOshirBcKQonGRjdLd1EiLErA1aYZ6z9mGVYupaX6T1R7vM3Y3dL2hdZmdoUCE7awPNzkRVmF9evbJJh1fsXfkUMQOPh8h5darIOKJ5BOui2q9fySDWSmvbcI"
            },
            body: JSON.stringify({ mutations })
        });
        data = await data.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
};

const fillingThePostsData = async (data, mutation, sanityData) => {
    let obj = {
        title: data.title.toString(),
        content: data.content,
        slug: {
            current: data.slug,
        },
        date: new Date(data.date),
        featuredImageUrl: {
            asset: {
                url: data.featuredImage?.node?.sourceUrl || "",
                title: data.featuredImage?.node?.altText || "",
            }
        },
        excerpt: data.excerpt,
        seo: {
            title: data.seo.title,
            canonical: data.seo.canonical,
            metaDesc: data.seo.metaDesc,
            opengraphTitle: data.seo.opengraphTitle,
            opengraphImage: {
                asset: {
                    url: data.seo?.opengraphImage?.sourceUrl || ""
                }
            },
            opengraphDescription: data.seo.opengraphDescription || "",
        },

        author: {
            avatar: {
                asset: {
                    url: data.author.node.avatar.url,
                }
            },
            email: data.author.node.email,
            name: data.author.node.name,
            firstName: data.author.node.firstName,
            lastName: data.author.node.lastName,
        },
        // tags:data.tags.edges.map((el=>({"_type":'reference',"_ref":el.node.name}))),
        // categories:data.categories.edges.map((el=>({_type:'reference',_ref:'categories'})))

    };
    let element = sanityData.find(el => {
        // console.log(el.slug.current,obj.slug)
        return el.slug?.current == obj.slug.current
    });
    let mutations;
    if (!element) {
        mutations = [{
            create: {
                _id: "post.",
                _type: "post",
                ...obj
            }
        }];
    } else {
        mutations = [{
            createOrReplace: {
                _id: `${element._id}`,
                _type: "post",

                ...obj
            }
        }]
    }
    try {
        let data = await fetch(`https://aqd5dq1h.api.sanity.io/v2023-08-01/data/mutate/production`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
                "Authorization": "Bearer skLwBDEMK7DJ6q0shyonMT7vl1SDRYmVw6Jt4im3vZENITWGK9D98mDf9lvZOshirBcKQonGRjdLd1EiLErA1aYZ6z9mGVYupaX6T1R7vM3Y3dL2hdZmdoUCE7awPNzkRVmF9evbJJh1fsXfkUMQOPh8h5darIOKJ5BOui2q9fySDWSmvbcI"
            },
            body: JSON.stringify({ mutations })
        });
        data = await data.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
};
const migratePosts = async () => {
    let wordpressData = await callWpPostsData();
    let sanityData = await callSyPostsData()
    let mutation = []
    wordpressData.forEach(el => fillingThePostsData(el, mutation, sanityData))
}

migratePages()
migratePosts()