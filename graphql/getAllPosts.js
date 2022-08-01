import { gql } from '@apollo/client'

const getAllPosts = gql`
    query getAllPosts($count: Int) {
        allPosts(count: $count) {
            id
            title
            createdAt
        }
    }
`

export default getAllPosts
