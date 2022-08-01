import { useQuery} from "@apollo/client";
import getAllPosts from "../graphql/getAllPosts";
import Histogram from "../components/histogram";
import GenericLoadingAndError from "../components/GenericLoadingAndErrors";
import {Typography, Box} from "@mui/material";

export default function Home() {

  const { loading, error, data } = useQuery(getAllPosts,{
    variables: {
      count: 1000
    }
  })

  let allPosts = []

    if(!loading && !error){
        data.allPosts.forEach(post => {
            const newDate = new Date(+post.createdAt)
            allPosts.push({...post, createdAt: newDate})
        })
    }

    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December']
    const year = 2019

    const getPostsPerMonth = (month) => {
        return allPosts.filter(post => post.createdAt.getFullYear() === year && post.createdAt.getMonth() === month).length
    }

    const getFormattedData = () => {

        let postsPerMonth = []
        months.forEach((month,index) => {
            const postsNo = getPostsPerMonth(index)
            postsPerMonth.push({month, postsNo})
        })
        return postsPerMonth
    }

    return (
        <Box>
          <GenericLoadingAndError loading={loading} error={error} />

          {!loading && !error && data && (
              <Box sx={{textAlign: 'center'}}>
                  <Typography variant='h4' my={6}>
                      Number of posts created in each month of 2019.
                  </Typography>

                  <Histogram postsNoPerMonth={getFormattedData()}/>

                  <Typography sx={{fontStyle: 'italic', my: 6}}>(Click on the Histogram)</Typography>
              </Box>
          )}
        </Box>
    )
}
