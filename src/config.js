export default {

  STRIPE_KEY: "pk_test_51HHIv5KZikXEzDO0mSh3PnHVckXIBXMLshaZpT6spgeZUl7Fktfsy84oP64KUBg7yg4xPEuj5zCmf6lO54588XHU005HDcgPAy",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-sahil"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://9kn1ihys6c.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_3QZefBn4I",
    APP_CLIENT_ID: "72lo7h54l6n6lr8u6ecd3rapma",
    IDENTITY_POOL_ID: "us-east-1:5a4986b5-e800-4b4e-a30b-5dd8838085c7"
  }
};
