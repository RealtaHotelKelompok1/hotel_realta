# Hotel Realta - Database Dictionary

## Database Objects

### Tables
#### payment.entities
| Key    | Name               | Data Type        | Attribute        | References         | Unique |
| :----: | :----------------: | :--------------: | :--------------: | :----------------: | :----: |
| PK     | entity_id          | integer          |  Identity        |                    |        |

#### payment.bank
| Key    | Name               | Data Type        | Attribute        | References         | Unique |
| :----: | :----------------: | :--------------: | :--------------: | :----------------: | :----: |
| PK, FK | bank_entity_id     | integer          |                  | `payment.entities` |        | 
|        | bank_code          | varchar(10)      |                  |                    | ✔️     |
|        | bank_name          | varchar(55)      |                  |                    | ✔️     |
|        | bank_modified_date | timestamp        | Default: `NOW()` |                    |        |

#### payment.payment_gateaway
| Key    | Name               | Data Type        | Attribute        | References         | Unique |
| :----: | :----------------: | :--------------: | :--------------: | :----------------: | :----: |
| PK, FK | paga_entity_id     | integer          |                  | `payment.entities` |        | 
|        | paga_code          | varchar(10)      |                  |                    | ✔️     |
|        | paga_name          | varchar(55)      |                  |                    | ✔️     |
|        | paga_modified_date | timestamp        | Default: `NOW()` |                    |        |

#### payment.user_accounts
| Key    | Name                   | Data Type        | Attribute        | References         | Unique |
| :----: | :--------------------: | :--------------: | :--------------: | :----------------: | :----: |
| PK, FK | usac_entity_id         | integer          |                  | `payment.entities` |        | 
| PK, FK | usac_user_id           | integer          |                  | `users.users`      |        | 
|        | usac_account_number    | varchar(25)      |                  |                    | ✔️     | 
|        | usac_saldo             | integer          |                  |                    |        | 
|        | usac_type              | varchar(15)      |                  |                    |        |
|        | usac_expmonth          | integer          |                  |                    |        |
|        | usac_expyear           | integer          |                  |                    |        |
|        | usac_modified_date     | timestamp        | Default: `NOW()` |                    |        |

#### payment.payment_transaction
| Key    | Name                   | Data Type        | Attribute        | References         | Unique |
| :----: | :--------------------: | :--------------: | :--------------: | :----------------: | :----: |
| PK     | patr_id                | integer          | Identity         |                    |        |
|        | patr_trx_number        | varchar(55)      |                  |                    | ✔️     |
|        | patr_debet             | integer          |                  |                    |        |
|        | patr_credit            | integer          |                  |                    |        |
|        | patr_type              | varchar(3)       |                  |                    |        |
|        | patr_note              | varchar(255)     |                  |                    |        |
|        | patr_modified_date     | timestamp        | Default: `NOW()` |                    |        |
|        | patr_order_number      | varchar(55)      |                  | `resto.order_menus`, `booking.booking_orders` | | 
| FK     | patr_source_id         | integer          |                  | `payment.entity_id` or `payment.user_accounts` | | 
| FK     | patr_target_id         | integer          | Default: va realta | `payment.user_accounts` | |
|        | patr_trx_number_ref    | varchar(55)      |                  | | ✔️ |
| FK     | patr_user_id           | integer          |                  | `users.users` | | |

### Functions
#### `getEntityId()`
Return type: `integer`
To generate `entity_id` from `payment.entities` table based on maximum row of `entity_id`.

#### `getTransactionNumber()`
Return type: `text`
To generate transaction number from TransactionID, TransactionType, and TransactionDate
- TransactionDate: default `NOW()`, 

### Procedures
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