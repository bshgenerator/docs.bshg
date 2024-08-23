
# Custom Validator Method

how to create a costume validator, to fit your project requirement.

For types not covered by predefined validators, `v.custom<Type>()` allows you to create custom validators with tailored validation logic.

```typescript
v.custom<MyType>()
  .onError({
    error: (value): boolean => false, // Custom validation function returning `false` if validation fails
    message: "Custom error message" // Optional error message associated with the validation function
  })
  .onError({...}) // You can define multiple custom error handlers as needed
```

Using `v.custom<Type>()`, you can implement specialized validation rules specific to your application's requirements, ensuring robust validation across various data types and scenarios.