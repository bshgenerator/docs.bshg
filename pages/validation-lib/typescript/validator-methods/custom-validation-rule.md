
# Custom Validation Rule

how to create a costume rule validation, to fit your project requirement.

`.onError()` allows for custom error handling tailored to specific validation scenarios. This method accepts an object of type `ValidatorFnConfig<FieldType, ObjectType>`, which provides a structured way to define validation functions and associated error messages.

- **`error`**: This field specifies the validation function. It accepts parameters:
    - `value`: The current value of the field being validated.
    - `container` (optional): The object containing the field being validated.

  The function returns `true` if validation fails (i.e., an error condition is detected), and `false` otherwise.

- **`message`**: Optionally, you can specify an error message associated with the validation function. This can be a string or a function returning a string, allowing for dynamic error messages based on validation outcomes.

````typescript /onError/ / error/ / message/
v.string().onError({
  error: (value: string) => {
      return true //error
  },
  message: "message to be displayed"
})
````