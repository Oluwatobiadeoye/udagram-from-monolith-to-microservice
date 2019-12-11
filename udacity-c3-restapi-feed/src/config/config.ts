export const config = {
  "dev": {
    "username": process.env.DEV_POSTGRESS_USERNAME,
    "password": process.env.DEV_POSTGRESS_PASSWORD,
    "database": process.env.DEV_POSTGRESS_DATABASE,
    "host": process.env.DEV_POSTGRESS_HOST,
    "dialect": "postgres",
    "aws_region": process.env.DEV_AWS_REGION,
    "aws_profile": process.env.DEV_AWS_PROFILE,
    "aws_media_bucket": process.env.DEV_AWS_MEDIA_BUCKET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  }
}