# Basic Usage

#### 1. Creating Your Type
First, define the TypeScript class for your data model:
```typescript
type User = {
  username: string;
  password: string;
  fullName: string;
  age: number;
  email: string;
  phone: string;
}
```

#### 2. Import the Library
Import the `v` symbol, which contains all the library methods you can use:
```typescript
import { v } from '@bshg/validation';
```

#### 3. Creating a Validator for Your Type
Create a validator instance for your `User` type:
```typescript {1} /v.validator<User>/ /v.string()/ /v.number()/
import { v } from '@bshg/validation';

const validator = v.validator<User>({
  items: {
    username: v.string().required().alpha(),
    password: v.string().required().min(8),
    fullName: v.string().required(),
    email: v.string().required().email(),
    phone: v.string().required().phone(),
    age: v.number().positive(),
  }
});
```

#### 4. Validate the data

````typescript /validator.validate/
const isValid = validator.validate({
    username: "bsh.g",
    password: "password",
    fullName: "BSH.G Code Generator",
    age: 20,
    email: "bsh.generator@gmail.com",
    phone: "0000000000"
})
````