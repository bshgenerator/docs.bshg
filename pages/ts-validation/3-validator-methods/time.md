
# Time

ready function to use to validate time like data

```typescript
v.time()
  .undefined()       // Allows `undefined`
  .required()        // Requires a value
  .after(new Date()) // Time must be after the specified time
  .before(new Date())  // Time must be before the specified time
  .between(new Date(), new Date())  // Time must be between the specified start and end times
  .nowOrAfter()      // Time must be now or after now
  .nowOrBefore()     // Time must be now or before now
  .past()            // Time must be in the past
  .future()          // Time must be in the future
  .within24Hours()   // Time must be within the next 24 hours
  .as<Type>('key')   // Same as for strings
```