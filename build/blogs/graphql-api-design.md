---
title: "Modern API Design with GraphQL"
slug: "graphql-api-design"
date: "2026-02-24"
category: "technical"
excerpt: "Building efficient and flexible APIs with GraphQL. Learn about schema design, resolvers, and best practices for production applications."
---

# Modern API Design with GraphQL

GraphQL revolutionizes how we build and consume APIs. This guide covers everything from basics to production best practices.

## Why GraphQL?

Traditional REST APIs have limitations:
- Over-fetching (getting more data than needed)
- Under-fetching (multiple requests for related data)
- Version management complexity

GraphQL solves these with:
- Request exactly what you need
- Get multiple resources in one request
- Strongly typed schema

## Schema Design

Define your API contract:

```graphql
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
  createdAt: DateTime!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
  comments: [Comment!]!
  publishedAt: DateTime
}

type Comment {
  id: ID!
  text: String!
  author: User!
  post: Post!
}

type Query {
  user(id: ID!): User
  users(limit: Int, offset: Int): [User!]!
  post(id: ID!): Post
  posts(authorId: ID): [Post!]!
}

type Mutation {
  createUser(name: String!, email: String!): User!
  updateUser(id: ID!, name: String, email: String): User!
  deleteUser(id: ID!): Boolean!
  createPost(title: String!, content: String!, authorId: ID!): Post!
}
```

## Server Implementation

Using Apollo Server:

```javascript
const { ApolloServer, gql } = require('apollo-server');

// Type definitions
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book!]!
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!): Book!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    books: () => books,
    book: (_, { id }) => books.find(book => book.id === id),
  },
  Mutation: {
    addBook: (_, { title, author }) => {
      const newBook = {
        id: String(books.length + 1),
        title,
        author,
      };
      books.push(newBook);
      return newBook;
    },
  },
};

// Server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
```

## Client Queries

Fetch exactly what you need:

```graphql
query GetUser {
  user(id: "1") {
    id
    name
    email
    posts {
      id
      title
      comments {
        id
        text
      }
    }
  }
}
```

Using Apollo Client:

```javascript
import { useQuery, gql } from '@apollo/client';

const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      posts {
        title
      }
    }
  }
`;

function UserProfile({ userId }) {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>{data.user.name}</h2>
      <ul>
        {data.user.posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Mutations

Modify data:

```javascript
import { useMutation, gql } from '@apollo/client';

const CREATE_POST = gql`
  mutation CreatePost($title: String!, $content: String!, $authorId: ID!) {
    createPost(title: $title, content: $content, authorId: $authorId) {
      id
      title
      content
      author {
        name
      }
    }
  }
`;

function CreatePost() {
  const [createPost, { loading, error }] = useMutation(CREATE_POST);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost({
      variables: {
        title: 'New Post',
        content: 'Post content...',
        authorId: '1'
      }
    });
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

## N+1 Problem and DataLoader

Solve the N+1 query problem:

```javascript
const DataLoader = require('dataloader');

// Batch loading function
const batchUsers = async (ids) => {
  const users = await db.users.findMany({
    where: { id: { in: ids } }
  });

  return ids.map(id => users.find(user => user.id === id));
};

// Create loader
const userLoader = new DataLoader(batchUsers);

// Use in resolver
const resolvers = {
  Post: {
    author: (post) => userLoader.load(post.authorId),
  },
};
```

## Pagination

Cursor-based pagination:

```graphql
type PageInfo {
  hasNextPage: Boolean!
  endCursor: String
}

type PostConnection {
  edges: [PostEdge!]!
  pageInfo: PageInfo!
}

type PostEdge {
  node: Post!
  cursor: String!
}

type Query {
  posts(first: Int, after: String): PostConnection!
}
```

## Error Handling

```javascript
const resolvers = {
  Query: {
    user: async (_, { id }) => {
      const user = await db.user.findUnique({ where: { id } });

      if (!user) {
        throw new Error(`User with id ${id} not found`);
      }

      return user;
    },
  },
};
```

## Authentication

```javascript
const { ApolloServer } = require('apollo-server');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // Get token from headers
    const token = req.headers.authorization || '';

    // Verify token and get user
    const user = verifyToken(token);

    return { user };
  },
});

// In resolver
const resolvers = {
  Mutation: {
    createPost: (_, args, context) => {
      if (!context.user) {
        throw new Error('Not authenticated');
      }

      return createPost(args, context.user);
    },
  },
};
```

## Best Practices

1. **Design schema first** - Think about API from client perspective
2. **Use DataLoader** - Prevent N+1 queries
3. **Implement pagination** - For large datasets
4. **Error handling** - Provide meaningful errors
5. **Authentication/Authorization** - Secure your API
6. **Rate limiting** - Prevent abuse
7. **Monitoring** - Track query complexity and performance

## Tools

- **Apollo Studio**: Schema management and monitoring
- **GraphQL Playground**: Interactive API explorer
- **GraphiQL**: In-browser IDE for GraphQL
- **Prisma**: Database ORM with GraphQL integration

GraphQL provides a powerful, flexible approach to API design. It shifts complexity from clients to the server, resulting in better developer experience and more efficient applications.
