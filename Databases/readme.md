# Database Guide

## Payment Schema
### Tables
TBA

### Functions
#### `getEntityId()`
Return type: `integer`
To generate `entity_id` from `payment.entities` table based on maximum row of `entity_id`.

#### `getTransactionNumber()`
Return type: `text`
To generate transaction number from TransactionID, TransactionType, and TransactionDate

### Stored Procedures
#### `InsertPaymentGateaway()`
Parameters: 
TBA

#### `InsertBank()`
Parameters: 
TBA

#### `InsertUserAccounts()`
Parameters:
TBA

#### `InsertBookingPaymentTransaction()`
Parameters: 
TBA

#### `InsertPaymentTransaction()`
Parameters: 
TBA