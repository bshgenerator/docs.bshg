---
sidebar_position: 6
---

# Define Rules

## Simple Fields

You can define validation rules for simple fields using the `items` property of the [ValidatorConfig](/ts-validation/2-v-validator#config-param-validatorconfig). This property accepts an object where you specify the fields to validate. The object should include only the fields of the type passed to [`v.validator<Type>`](/ts-validation/2-v-validator). Each field is of type `ItemType`.

```typescript
type ItemType<T, TContext> = {
  [K in keyof T]?: TypeValidator<T[K]> | TypeValidatorWithContext<T[K], TContext>[];
}
```

> **Note:** `TypeValidatorWithContext` is used to define validation rules that depend on contextual information. For example, validations based on the [context](/docs/library/validation/typescrip/context-validation) of the application or specific data dependencies.

#### Defining Validation Rules for Simple Fields

Here's how you can define validation rules for individual fields:

```ts /fieldName/ /validatorMethod/ /rule1()/
<fieldName>: v.<validatorMethod>.<rule1()>...
```

In this structure:

- `validatorMethod` refers to predefined methods provided by the library (`v`) to create `TypeValidator` objects containing validation rules.
- `rule1`, `rule2`, etc., are methods or functions chained together to specify validation criteria such as required fields, string length, format, etc. [(read more)](/docs/category/validator-methods)

This approach allows you to configure detailed validation requirements for each field in your data type, ensuring data integrity and consistency in your application.

#### Example

```typescript
v.validator<User>({
  id: 'validator id',
  items: {
    username: v.string().required(),
    age: v.number().positive(),
    password: v.string().onError({
      error: (value) => {
        // Custom validation logic to ensure password complexity
        return true;
      },
      message: 'Password must be complex'
    })
  }
})
```

---

## Nested Fields

To define rules for nested objects in your data, there are two approaches:

#### 1. Using the `nested` Property

One way to validate nested objects is to create their own validators and then pass them in the `nested` property of the [ValidatorConfig](/docs/library/validation/typescrip/v-validator#config-param-validatorconfig).

```typescript
const childValidator = v.validator<ChildType>({
  items: {
    name: v.string().required(),
    age: v.number().positive()
  }
});

v.validator<ParentType>({
  nested: {
    child: childValidator
  }
});
```

In this example:

- `childValidator` is created to validate the `ChildType`, specifying rules for fields like `name` and `age`.
- The `v.validator<ParentType>` creates a validator for `ParentType`, where the `nested` property includes `child: childValidator`.
- This setup ensures that when validating a `ParentType` object, the `child` property will be validated according to the rules defined in `childValidator`.

Using this approach allows for modular and reusable validation logic, especially useful when dealing with complex data structures that include nested objects. It promotes code organization and maintains clear separation of validation rules for different parts of your data model.

#### 2. Using the `items` Property

Another approach to validate nested objects is by using `v.custom()` within the `items` property of the [ValidatorConfig](/docs/library/validation/typescrip/v-validator#config-param-validatorconfig). This method allows you to validate nested objects without needing to create separate validators for them.

```typescript
v.validator<ParentType>({
  items: {
    child: v.custom<ChildType>().onError({
      error: (value) => {
        // Custom validation logic for the nested object 'child'
        // Example: Checking if 'child' object meets specific criteria
        return !value.name || value.age < 0;
      },
      message: 'Error: Invalid child object'
    })
  }
});
```

In this example:

- `v.validator<ParentType>` creates a validator for `ParentType`.
- The `items` property defines validation rules for fields directly within `ParentType`.
- `child: v.custom<ChildType>()` specifies that the `child` property should be validated using a custom validator for `ChildType`.
- `.onError({ ... })` allows customization of error handling for the nested object validation.
    - The `error` function defines custom logic to validate the `child` object. Here, it checks if `child.name` exists and `child.age` is not negative.
    - The `message` provides an error message when validation fails for the nested object.

This approach is useful when you prefer to define validation rules inline within the main validator configuration, especially for nested objects that do not require extensive validation or are context-specific. It simplifies the structure by consolidating all validation logic within a single validator definition.