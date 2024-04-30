"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[323308],{398970:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return k}});var a=n(145987),o=(n(667294),n(603905)),r=n(503624),p=n(569296);const s=["components"],i={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=l("PageDescription"),d=l("AnchorLinks"),u=l("AnchorLink"),h=l("InlineNotification"),m={_frontmatter:i},g=r.Z;function k(e){let{components:t}=e,n=(0,a.Z)(e,s);return(0,o.kt)(g,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{mdxType:"PageDescription"},(0,o.kt)("p",null,"This step takes our static components and populates them with data from the\nGitHub GraphQL API – loading states and all. We’ll be displaying Carbon\nrepository information in a data table.")),(0,o.kt)(d,{mdxType:"AnchorLinks"},(0,o.kt)(u,{mdxType:"AnchorLink"},"Fork, clone and branch"),(0,o.kt)(u,{mdxType:"AnchorLink"},"Install dependencies"),(0,o.kt)(u,{mdxType:"AnchorLink"},"Fetch data"),(0,o.kt)(u,{mdxType:"AnchorLink"},"Populate data table"),(0,o.kt)(u,{mdxType:"AnchorLink"},"Add loading"),(0,o.kt)(u,{mdxType:"AnchorLink"},"Add pagination"),(0,o.kt)(u,{mdxType:"AnchorLink"},"Submit pull request")),(0,o.kt)("h3",null,"Preview"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest?apiVersion=2022-11-28"},"GitHub REST API")," is\nvery well documented, we’ll use it to fetch Carbon-related data for this Carbon\ntutorial."),(0,o.kt)("p",null,"To do so, we’ll be using\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/octokit/core.js/#readme"},"Octokit Core"),", a client that makes\nit easy to interact with GitHub’s APIs."),(0,o.kt)("p",null,"A\n",(0,o.kt)("a",{parentName:"p",href:"https://carbon-tutorial-nextjs-git-v11-next-step-4-carbon-design-system.vercel.app/"},"preview"),"\nof what you will build (see repositories page):"),(0,o.kt)(p.Z,{height:"400",title:"Carbon Tutorial Step 3",src:"https://carbon-tutorial-nextjs-git-v11-next-step-4-carbon-design-system.vercel.app/",frameBorder:"no",allowtransparency:"true",allowFullScreen:"true",mdxType:"Preview"}),(0,o.kt)("h2",null,"Fork, clone and branch"),(0,o.kt)("p",null,"This tutorial has an accompanying GitHub repository called\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-tutorial-nextjs"},"carbon-tutorial-nextjs"),"\nthat we’ll use as a starting point for each step. If you haven’t forked and\ncloned that repository yet, and haven’t added the upstream remote, go ahead and\ndo so by following the\n",(0,o.kt)("a",{parentName:"p",href:"/developing/react-tutorial/step-1#fork-clone-and-branch"},"step 1 instructions"),"."),(0,o.kt)("h3",null,"Branch"),(0,o.kt)("p",null,"With your repository all set up, let’s check out the branch for this tutorial\nstep’s starting point."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git fetch upstream\ngit checkout -b v11-next-step-3 upstream/v11-next-step-3\n")),(0,o.kt)("h3",null,"Build and start app"),(0,o.kt)("p",null,"Install the app’s dependencies and build the app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn && yarn build\n")),(0,o.kt)("p",null,"Then, start the app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start\n")),(0,o.kt)("p",null,"You should see something similar to where the\n",(0,o.kt)("a",{parentName:"p",href:"/developing/react-tutorial/step-2"},"previous step")," left off. Stop your app with\n",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL-C")," and let’s get everything installed."),(0,o.kt)("h2",null,"Install dependencies"),(0,o.kt)("p",null,"We’ll need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"@octokit/core"),", a package that allows us to query GitHub\nAPIs easily. Stop your development server with ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL-C")," and install the octokit\ndependency with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @octokit/core@4.2.0\n")),(0,o.kt)("p",null,"Then, start the app again. If your app’s currently running, you’ll need to\nrestart it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn dev\n")),(0,o.kt)("h2",null,"Fetch data"),(0,o.kt)("h3",null,"Imports"),(0,o.kt)("p",null,"We’ll be using ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"React Hooks")," to call\na function to fetch our data when the component renders."),(0,o.kt)("p",null,"Import React’s ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-effect.html"},"useEffect")," by\nmodifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"React")," import in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app/repos/page.js"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repos/page.js",path:"src/app/repos/page.js"},"import React, { useEffect } from 'react';\n")),(0,o.kt)("p",null,"Add the following import below the react import in ",(0,o.kt)("inlineCode",{parentName:"p"},"RepoPage"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repos/page.js",path:"src/app/repos/page.js"},"import { Octokit } from '@octokit/core';\n")),(0,o.kt)("h3",null,"Initializing Octokit client"),(0,o.kt)("p",null,"Directly below all your imports, initialize an octokit client which we’ll use to\nquery our ",(0,o.kt)("inlineCode",{parentName:"p"},"RepoTable")," data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repos/page.js",path:"src/app/repos/page.js"},"const octokitClient = new Octokit({});\n")),(0,o.kt)("h3",null,"API Request"),(0,o.kt)("p",null,"Next, we’ll assemble our GitHub API request to fetch a list of repositories that\nbelong to the ",(0,o.kt)("inlineCode",{parentName:"p"},"carbon-design-system")," GitHub organization. We’ll do this by using\na ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook that will use octokit to query GitHub’s API\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-organization-repositories"},"repositories endpoint"),"."),(0,o.kt)("p",null,"Let’s declare a ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook immediately below the component definition and\nabove the return. We’ll use this to query GitHub’s API when the component first\nrenders:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repos/page.js",path:"src/app/repos/page.js"},"function RepoPage() {\n  useEffect(() => {\n    async function getCarbonRepos() {\n      const res = await octokitClient.request('GET /orgs/{org}/repos', {\n        org: 'carbon-design-system',\n        per_page: 75,\n        sort: 'updated',\n        direction: 'desc',\n      });\n\n      if (res.status === 200) {\n        console.log(res.data);\n      } else {\n        console.log('Error obtaining repository data');\n      }\n    }\n\n    getCarbonRepos();\n  }, []);\n")),(0,o.kt)("p",null,"At this point, if you navigate to the Repositories page ",(0,o.kt)("inlineCode",{parentName:"p"},"/repos")," in your running\napp and view your browser’s console (e.g.\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/devtools/"},"Chrome DevTools"),"), you should see\nthe response from GitHub!"),(0,o.kt)("h3",null,"Helpers"),(0,o.kt)("p",null,"Our last column in the data table will be a comma-separated list of repository\nand home page links, so let’s create a component called ",(0,o.kt)("inlineCode",{parentName:"p"},"LinkList"),"."),(0,o.kt)("p",null,"Import ",(0,o.kt)("inlineCode",{parentName:"p"},"Link")," at the top of ",(0,o.kt)("inlineCode",{parentName:"p"},"/app/repos/page.js"),". The imports should look like\nthis."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repos/page.js",path:"src/app/repos/page.js"},"import { Link, Grid, Column } from '@carbon/react';\n")),(0,o.kt)("p",null,"Then use ",(0,o.kt)("inlineCode",{parentName:"p"},"Link")," in this component. It has two props (",(0,o.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"homepageUrl"),")\nand returns an unordered list. If the repository does not have a home page URL,\nonly render the repository link."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repos/page.js",path:"src/app/repos/page.js"},"const LinkList = ({ url, homepageUrl }) => (\n  <ul style={{ display: 'flex' }}>\n    <li>\n      <Link href={url}>GitHub</Link>\n    </li>\n    {homepageUrl && (\n      <li>\n        <span>&nbsp;|&nbsp;</span>\n        <Link href={homepageUrl}>Homepage</Link>\n      </li>\n    )}\n  </ul>\n);\n")),(0,o.kt)("p",null,"As a final helper, let’s create a function that transforms row data to our\nexpected header keys. Notice how we’re using our new ",(0,o.kt)("inlineCode",{parentName:"p"},"LinkList")," component to\ngenerate the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"links")," key in each row."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repos/page.js",path:"src/app/repos/page.js"},"const getRowItems = (rows) =>\n  rows.map((row) => ({\n    ...row,\n    key: row.id,\n    stars: row.stargazers_count,\n    issueCount: row.open_issues_count,\n    createdAt: new Date(row.created_at).toLocaleDateString(),\n    updatedAt: new Date(row.updated_at).toLocaleDateString(),\n    links: <LinkList url={row.html_url} homepageUrl={row.homepage} />,\n  }));\n")),(0,o.kt)("h3",null,"Populate data table"),(0,o.kt)("p",null,"Now that we have our data, let’s dispose of our dummy ",(0,o.kt)("inlineCode",{parentName:"p"},"rows")," and populate the\ndata table with real data."),(0,o.kt)("p",null,"First, towards the top of ",(0,o.kt)("inlineCode",{parentName:"p"},"RepoPage")," delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"rows")," array because we no\nlonger need the example rows."),(0,o.kt)("p",null,"Next, let’s add a couple variables that will help us store useful information\nwhen fetching the data and keep track of the loading state."),(0,o.kt)("p",null,"We’ll be using ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"React Hooks")," again to\nmanage our state."),(0,o.kt)("p",null,"Import React’s ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-state.html"},"useState")," by\nmodifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"React")," import."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repos/page.js",path:"src/app/repos/page.js"},"import React, { useEffect, useState } from 'react';\n")),(0,o.kt)("p",null,"Then, inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"RepoPage")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repos/page.js",path:"src/app/repos/page.js"},"function RepoPage() {\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState();\n  const [rows, setRows] = useState([]);\n")),(0,o.kt)("p",null,"Now, instead of using ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log")," to log the github data response, let’s treat\nthe response data by passing it through our ",(0,o.kt)("inlineCode",{parentName:"p"},"getRowItems")," helper and saving the\nresult in our new ",(0,o.kt)("inlineCode",{parentName:"p"},"rows")," variable. Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log(res.data);")," line\ninside ",(0,o.kt)("inlineCode",{parentName:"p"},"if (res.status === 200)")," with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repos/page.js",path:"src/app/repos/page.js"},"setRows(getRowItems(res.data));\n")),(0,o.kt)("p",null,"Let’s also replace our error log line inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"else")," statement with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repos/page.js",path:"src/app/repos/page.js"},"setError('Error obtaining repository data');\n")),(0,o.kt)("p",null,"To complete our ",(0,o.kt)("inlineCode",{parentName:"p"},"getCarbonRepos")," function, let’s set the loading state to false\nright after the ",(0,o.kt)("inlineCode",{parentName:"p"},"else")," statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repos/page.js",path:"src/app/repos/page.js"},"if (res.status === 200) {\n  setRows(getRowItems(res.data));\n} else {\n  setError('Error obtaining repository data');\n}\nsetLoading(false);\n")),(0,o.kt)("p",null,"Finally, let’s modify our component’s ",(0,o.kt)("inlineCode",{parentName:"p"},"return()")," statement to display different\ninformation depending on the states of our request: loading, error or complete.\nReplace the current return statement with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repos/page.js",path:"src/app/repos/page.js"},"if (loading) {\n  return 'Loading...';\n}\n\nif (error) {\n  return `Error! ${error}`;\n}\n\n// If we're here, we've got our data!\nreturn (\n  <Grid className=\"repo-page\">\n    <Column lg={16} md={8} sm={4} className=\"repo-page__r1\">\n      <RepoTable headers={headers} rows={rows} />\n    </Column>\n  </Grid>\n);\n")),(0,o.kt)("h3",null,"Render repository descriptions"),(0,o.kt)("p",null,"The data table component and its pieces use a common React pattern called\n",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/render-props.html"},"render props"),". This is a really\npowerful way for libraries to give developers control of rendering and\nmanipulating their data."),(0,o.kt)("p",null,"Revisiting ",(0,o.kt)("inlineCode",{parentName:"p"},"RepoTable.js"),", we are already passing in our row objects along with\nheaders for each column. The ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," prop is being used to tell the data table\nhow to render the headers and rows. That prop takes a function that receives the\nprocessed headers and rows as arguments as well as some helper functions for\nrendering the table."),(0,o.kt)("p",null,"One common hurdle with the data table is how to access data that might not\ncorrespond with a table column but is needed to compute the value of a cell that\ndoes. The data table component processes and controls only the row properties\nwhich corresponds to headers (columns). Because of this, the ",(0,o.kt)("inlineCode",{parentName:"p"},"rows")," object you\nget access to in the render prop function is ",(0,o.kt)("em",{parentName:"p"},"different")," than the one you passed\nin to the ",(0,o.kt)("inlineCode",{parentName:"p"},"rows")," prop."),(0,o.kt)("p",null,"We need to modify one aspect of the data table because if you expand a row, it\nsays ",(0,o.kt)("inlineCode",{parentName:"p"},"Row description"),". We want to update that with the repository description\ncoming from the GitHub API. This is an example of where we need a simple look-up\nfunction to find the data we care about - data that does not directly correspond\nto a column."),(0,o.kt)("p",null,"To do so, in ",(0,o.kt)("inlineCode",{parentName:"p"},"RepoTable.js"),", add this look-up function as the first lines inside\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"RepoTable"),". This should go immediately before the component’s ",(0,o.kt)("inlineCode",{parentName:"p"},"return()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repos/RepoTable.js",path:"src/app/repos/RepoTable.js"},"const getRowDescription = (rowId) => {\n  const row = rows.find(({ id }) => id === rowId);\n  return row ? row.description : '';\n};\n")),(0,o.kt)("p",null,"Finally, in ",(0,o.kt)("inlineCode",{parentName:"p"},"RepoTable.js"),", replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<p>Row description</p>")," with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"path=src/app/repos/RepoTable.js",path:"src/app/repos/RepoTable.js"},"<p>{getRowDescription(row.id)}</p>\n")),(0,o.kt)("h2",null,"Add loading"),(0,o.kt)("p",null,"At this point, the first time that you visit the repositories page, we’re\nquerying the GitHub API and rendering the response through the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataTable"),"\ncomponent. We could stop here, but there’s more to be done! Let’s replace the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Loading...")," string with the\n",(0,o.kt)("a",{parentName:"p",href:"https://react.carbondesignsystem.com/?path=/story/components-datatable--skeleton"},"DataTableSkeleton component"),"."),(0,o.kt)("p",null,"To do so, back to ",(0,o.kt)("inlineCode",{parentName:"p"},"RepoPage"),", add the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataTableSkeleton")," import by modifying\nthe existing ",(0,o.kt)("inlineCode",{parentName:"p"},"@carbon/react")," import."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repos/page.js",path:"src/app/repos/page.js"},"import { Link, DataTableSkeleton, Grid, Column } from '@carbon/react';\n")),(0,o.kt)("p",null,"Then replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"if (loading) return 'Loading...';")," with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repos/page.js",path:"src/app/repos/page.js"},'if (loading) {\n  return (\n    <Grid className="repo-page">\n      <Column lg={16} md={8} sm={4} className="repo-page__r1">\n        <DataTableSkeleton\n          columnCount={headers.length + 1}\n          rowCount={10}\n          headers={headers}\n        />\n      </Column>\n    </Grid>\n  );\n}\n')),(0,o.kt)("p",null,"We need to tell the loading skeleton how many rows to render, so let’s use 10\nskeleton rows to prepare for the next enhancement…"),(0,o.kt)("h2",null,"Add pagination"),(0,o.kt)("p",null,"Pagination! Instead of rendering every repository, let’s add pagination to the\ndata table to only render 10 at a time. Depending on your specific requirements,\nyou may need to fetch new data each time that you interact with the pagination\ncomponent, but for simplicity, we’re going to make one request to fetch all\ndata, and then paginate the in-memory row data."),(0,o.kt)("p",null,"Initialize the new state variables that we’ll use for pagination as the first\nlines inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"RepoPage"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repos/page.js",path:"src/app/repos/page.js"},"function RepoPage() {\n  const [firstRowIndex, setFirstRowIndex] = useState(0);\n  const [currentPageSize, setCurrentPageSize] = useState(10);\n...\n")),(0,o.kt)("p",null,"This initializes the total number of rows and the index of the first row to ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),",\nand the page size to ",(0,o.kt)("inlineCode",{parentName:"p"},"10")," as we also specified in our loading skeleton."),(0,o.kt)("p",null,"Then we need to update our ",(0,o.kt)("inlineCode",{parentName:"p"},"RepoTable")," ",(0,o.kt)("inlineCode",{parentName:"p"},"rows")," prop to only render the subset of\nrows for the current “page”. Update\n",(0,o.kt)("inlineCode",{parentName:"p"},"<RepoTable headers={headers} rows={rows} />")," to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repos/page.js",path:"src/app/repos/page.js"},"<RepoTable\n  headers={headers}\n  rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}\n/>\n")),(0,o.kt)(h,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," We only pass the rows that we want our table to display. We can do\nthis by slicing the array of rows depending on the first item and the page size.")),(0,o.kt)("p",null,"Finally, let’s add the ",(0,o.kt)("inlineCode",{parentName:"p"},"Pagination")," to update our state variables and cause the\ndata table to render new rows."),(0,o.kt)("p",null,"Import ",(0,o.kt)("inlineCode",{parentName:"p"},"Pagination")," by updating the ",(0,o.kt)("inlineCode",{parentName:"p"},"@carbon/react")," import."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repos/page.js",path:"src/app/repos/page.js"},"import {\n  Link,\n  DataTableSkeleton,\n  Pagination,\n  Grid,\n  Column,\n} from '@carbon/react';\n")),(0,o.kt)("p",null,"Immediately after the ",(0,o.kt)("inlineCode",{parentName:"p"},"RepoTable")," closing tag (",(0,o.kt)("inlineCode",{parentName:"p"},"/>"),"), add the ",(0,o.kt)("inlineCode",{parentName:"p"},"Pagination"),"\ncomponent using the state variables that we previously initialized."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repos/page.js",path:"src/app/repos/page.js"},'<Pagination\n  totalItems={rows.length}\n  backwardText="Previous page"\n  forwardText="Next page"\n  pageSize={currentPageSize}\n  pageSizes={[5, 10, 15, 25]}\n  itemsPerPageText="Items per page"\n  onChange={({ page, pageSize }) => {\n    if (pageSize !== currentPageSize) {\n      setCurrentPageSize(pageSize);\n    }\n    setFirstRowIndex(pageSize * (page - 1));\n  }}\n/>\n')),(0,o.kt)(h,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," The ",(0,o.kt)("inlineCode",{parentName:"p"},"Pagination")," component isn’t inherently connected in any way to\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"DataTable")," - we need to tell it what to do when a change occurs using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"onChange")," prop. This includes both page size changes and displaying different\nrows.")),(0,o.kt)(h,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Like the other Carbon React components, ",(0,o.kt)("inlineCode",{parentName:"p"},"Pagination")," component\nexamples can be found in\n",(0,o.kt)("a",{parentName:"p",href:"https://react.carbondesignsystem.com/?path=/story/components-pagination--pagination"},"Storybook"),"\nby browsing the story and knobs.")),(0,o.kt)("p",null,"That does it! Your data table should fetch GitHub data on first render. You can\nexpand each row to see the repository’s description. You can modify the\npagination items per page and cycle through pages or jump to a specific page of\nrepositories."),(0,o.kt)("h2",null,"Submit pull request"),(0,o.kt)("p",null,"We’re going to submit a pull request to verify completion of this tutorial step."),(0,o.kt)("h3",null,"Continuous integration (CI) check"),(0,o.kt)("p",null,"Run the CI check to make sure we’re all set to submit a pull request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn ci-check\n")),(0,o.kt)(h,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Having issues running the CI check?\n",(0,o.kt)("a",{parentName:"p",href:"/developing/react-tutorial/step-1#continuous-integration-(ci)-check"},"Step 1"),"\nhas troubleshooting notes that may help.")),(0,o.kt)("h3",null,"Git commit and push"),(0,o.kt)("p",null,"Before we can create a pull request, format your code, then stage and commit all\nof your changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'yarn format\ngit add --all && git commit -m "feat(tutorial): complete step 3"\n')),(0,o.kt)("p",null,"Then, push to your repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git push origin v11-next-step-3\n")),(0,o.kt)(h,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Having issues pushing your changes?\n",(0,o.kt)("a",{parentName:"p",href:"/developing/react-tutorial/step-1#git-commit-and-push"},"Step 1")," has\ntroubleshooting notes that may help.")),(0,o.kt)("h3",null,"Pull request (PR)"),(0,o.kt)("p",null,"Finally, visit\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-tutorial-nextjs"},"carbon-tutorial-nextjs"),"\nto “Compare & pull request”. In doing so, make sure that you are comparing to\n",(0,o.kt)("inlineCode",{parentName:"p"},"v11-next-step-3")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"base: v11-next-step-3"),"."),(0,o.kt)(h,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Expect your tutorial step PRs to be reviewed by the Carbon team but\nnot merged. We’ll close your PR so we can keep the repository’s remote branches\npristine and ready for the next person!")),(0,o.kt)(h,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," If your PR fails the CircleCI test with the error\n",(0,o.kt)("inlineCode",{parentName:"p"},"Can't make a request in offline mode"),", try running the following command:\n",(0,o.kt)("inlineCode",{parentName:"p"},"rm -rf .yarn-offline-mirror node_modules && yarn cache clean && yarn install"),".\nAdd and commit the changes once this completes, and try pushing again.")))}k.isMDXComponent=!0}}]);