---
title: "TypeScript Best Practices for 2026"
slug: "typescript-best-practices"
date: "2026-02-27"
category: "technical"
excerpt: "Modern TypeScript patterns and practices. Learn how to write type-safe, maintainable code with the latest features and tools."
---

# TypeScript Best Practices for 2026

TypeScript has become the standard for enterprise JavaScript development. Here are modern best practices for writing excellent TypeScript code.

## Strict Mode Configuration

Always use strict mode in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitAny": true,
    "noImplicitThis": true,
    "alwaysStrict": true
  }
}
```

## Type Inference Over Explicit Types

Let TypeScript infer types when obvious:

```typescript
// Bad - unnecessary type annotations
const count: number = 5;
const name: string = "John";

// Good - TypeScript infers these
const count = 5;
const name = "John";

// Good - explicit when needed
const users: User[] = [];
```

## Use Interfaces for Objects

```typescript
// Define clear interfaces
interface User {
  id: string;
  name: string;
  email: string;
  age?: number; // Optional property
  readonly createdAt: Date; // Readonly
}

// Extend interfaces
interface AdminUser extends User {
  permissions: string[];
  role: 'admin' | 'superadmin';
}
```

## Union Types and Type Guards

```typescript
type Status = 'pending' | 'approved' | 'rejected';

function handleStatus(status: Status) {
  switch (status) {
    case 'pending':
      return 'Waiting for approval';
    case 'approved':
      return 'Approved!';
    case 'rejected':
      return 'Rejected';
  }
}

// Type guards
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function processValue(value: string | number) {
  if (isString(value)) {
    console.log(value.toUpperCase()); // TypeScript knows it's a string
  } else {
    console.log(value.toFixed(2)); // TypeScript knows it's a number
  }
}
```

## Generics for Reusability

```typescript
// Generic function
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const numFirst = firstElement([1, 2, 3]); // number | undefined
const strFirst = firstElement(['a', 'b']); // string | undefined

// Generic interface
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

const userResponse: ApiResponse<User> = {
  data: { id: '1', name: 'John', email: 'john@example.com', createdAt: new Date() },
  status: 200,
  message: 'Success'
};
```

## Utility Types

TypeScript provides powerful utility types:

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Partial - make all properties optional
type PartialTodo = Partial<Todo>;

// Required - make all properties required
type RequiredTodo = Required<Todo>;

// Pick - select specific properties
type TodoPreview = Pick<Todo, 'title' | 'completed'>;

// Omit - exclude specific properties
type TodoWithoutDescription = Omit<Todo, 'description'>;

// Record - create object type with specific keys
type TodoRecord = Record<string, Todo>;
```

## Avoid 'any', Use 'unknown'

```typescript
// Bad
function processData(data: any) {
  return data.value; // No type safety
}

// Good
function processData(data: unknown) {
  if (typeof data === 'object' && data !== null && 'value' in data) {
    return (data as { value: string }).value;
  }
  throw new Error('Invalid data');
}
```

## Const Assertions

```typescript
// Without const assertion
const colors = ['red', 'green', 'blue']; // string[]

// With const assertion
const colors = ['red', 'green', 'blue'] as const; // readonly ['red', 'green', 'blue']

type Color = typeof colors[number]; // 'red' | 'green' | 'blue'
```

## Async/Await with Proper Typing

```typescript
interface ApiData {
  id: number;
  name: string;
}

async function fetchData(url: string): Promise<ApiData> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: ApiData = await response.json();
  return data;
}

// Error handling
async function safeLoadData(): Promise<ApiData | null> {
  try {
    return await fetchData('/api/data');
  } catch (error) {
    console.error('Failed to load data:', error);
    return null;
  }
}
```

## Discriminated Unions

```typescript
interface LoadingState {
  status: 'loading';
}

interface SuccessState<T> {
  status: 'success';
  data: T;
}

interface ErrorState {
  status: 'error';
  error: string;
}

type AsyncState<T> = LoadingState | SuccessState<T> | ErrorState;

function renderState(state: AsyncState<User>) {
  switch (state.status) {
    case 'loading':
      return 'Loading...';
    case 'success':
      return `Hello, ${state.data.name}`; // TypeScript knows data exists
    case 'error':
      return `Error: ${state.error}`; // TypeScript knows error exists
  }
}
```

## Module Organization

```typescript
// types.ts
export interface User {
  id: string;
  name: string;
}

export type UserRole = 'admin' | 'user';

// utils.ts
import type { User } from './types';

export function formatUser(user: User): string {
  return `${user.name} (${user.id})`;
}
```

## Testing with TypeScript

```typescript
import { describe, it, expect } from 'vitest';

describe('User Service', () => {
  it('should create user', () => {
    const user: User = {
      id: '1',
      name: 'Test User',
      email: 'test@example.com',
      createdAt: new Date()
    };

    expect(user.name).toBe('Test User');
  });
});
```

## Key Takeaways

1. **Enable strict mode** - catch errors early
2. **Use type inference** - let TypeScript work for you
3. **Prefer unknown over any** - maintain type safety
4. **Leverage utility types** - don't reinvent the wheel
5. **Use discriminated unions** - for complex state
6. **Generic functions** - for reusable code
7. **Const assertions** - for literal types

TypeScript is powerful when used correctly. These practices will help you write safer, more maintainable code.
