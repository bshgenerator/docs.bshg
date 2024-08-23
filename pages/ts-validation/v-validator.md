# Create Validator

In `@bshg/validation` the api that is responsible of validate the data is called `Validator`, this one is provide a lot of build in functionality to do the validation and more.

The `v.validator()` function is the core method that allows you to create validators for your data types. As seen in the previous [Basic Usage](/validation-lib/typescript/basic-usage) example with the `User` type, this function requires the data type and accepts a configuration object as a parameter.

### Function Signature

```typescript {5} /config: ValidatorConfig<Type, TContext>/ /Validator<Type, TContext>/ copy=false
function validator<Type, TContext>(config: ValidatorConfig<Type, TContext>): Validator<Type, TContext> {}
```

### Config Param: `ValidatorConfig`

The configuration object for `v.validator()` has the following structure:

```typescript copy=false
type ValidatorConfig<TV, TContext> = {
  id?: string,
  items?: ItemType<TV, TContext>,
  nested?: NestedType<TV>,
  options?: ValidatorOptions
}
```

| Property  | Type                     | Description                                                                                                                                                                                              |
|-----------|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`      | `string`                 | An optional identifier for the validator. This can be useful if you need to distinguish between multiple validators in your application. It is used to differentiate between the logs of the validators. |
| `items`   | `ItemType<TV, TContext>` | Defines the validation rules for the individual fields of your data type. This is where you specify the constraints and requirements for each property of your data type.                                |
| `nested`  | `NestedType<TV>`         | Allows you to define nested validation rules if your data type contains nested objects that also need validation.                                                                                        |
| `options` | `ValidatorOptions`       | Additional options to configure the behavior of the validator.                                                                                                                                           |


### Example

1. Data Types:

    ```typescript
    type Profile = {
      fullname: string;
      age: number;
    }
    
    type User = {
      email: string;
      password: string;
      profile: Profile;
    }
    ```

2. Define The Validator:

    ```typescript {1,4,6,7,12,14,15,18}
    import { v } from '@bshg/validation';
    
    const profileValidator = v.validator<Profile>({
      id: 'profileValidator',
      items: {
        fullname: v.string().required(),
        age: v.number().required().positive(),
      },
    });
    
    const userValidator = v.validator<User>({
      id: 'userValidator',
      items: {
        email: v.string().required().email(),
        password: v.string().required().min(8),
      },
      nested: {
        profile: profileValidator,
      }
    });
    ```

In this example:

- `profileValidator` is used within `userValidator` to validate nested objects.
- The `id` property is specified to distinguish between different validators and manage their logs effectively.
- The `items` property defines validation rules for individual fields.
- The `nested` property allows for the inclusion of validators for nested objects.
- The `options` property can be used for additional configurations to fine-tune the validator's behavior.

> **Note:** `TContext` is used to pass a type of the [context](/docs/library/validation/typescrip/context-validation).