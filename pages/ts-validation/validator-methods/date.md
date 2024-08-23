
# Date

ready function to use to validate date like data

```typescript
v.date()
  .undefined()       // Allows `undefined`
  .required()        // Requires a value
  .after(new Date()) // Date must be after the specified date
  .before(new Date())  // Date must be before the specified date
  .between(new Date(), new Date())  // Date must be between the specified start and end dates
  .todayOrAfter()    // Date must be today or after today
  .todayOrBefore()   // Date must be today or before today
  .past()            // Date must be in the past
  .future()          // Date must be in the future
  .weekday()         // Date must be a weekday (Monday to Friday)
  .weekend()         // Date must be a weekend (Saturday or Sunday)
  .leapYear()        // Date must be in a leap year
  .sameDayAs(new Date())  // Date must be the same day as the specified date
  .as<Type>('key')   // Same as for strings
```