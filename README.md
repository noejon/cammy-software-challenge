# cammy-software-challenge
Create a service (FE/BE) that accepts customer feedback and sends e-mail to both business team and a copy to the customer.

## AWS Setup

- Connect to your AWS console
- Create an IAM role for Lambda to access:
 - DynamoDb
 - SES

 Create a policy:
 AWS Console
    IAM
        Create a policy
        Add Permission for DynamoDB (TODO: add images)
        Add Permission for SES E-mail sending (TODO: add images)
        Add Permission for Logs (TODO: add images)
        Give Name to policy (LambdaCammy)
        Add Description (optional)
        Create the policy (TODO: Add images)
        Create Role (add images)
        Search for the name you chose for your policy (LambdaCammy in my example) and select it (add images)
        Give the role a name (LambdaCammy in our example)
        Create the role (add images)
        The role is added to your role list

Run unit tests for DynamoDB https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html
Download the Asia Pacific (Singapore) Region .zip file https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html
java -jar DynamoDBLocal.jar