aws --profile datafire-web-push s3 sync ./logos/ s3://datafire-logos --acl public-read
aws --profile datafire-web-push s3 sync ./json/ s3://datafire-logos/json --acl public-read
