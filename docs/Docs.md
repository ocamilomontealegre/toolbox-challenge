<div style="text-align: center;">

# Toolbox Challenge Documentation

</div>

## Introduction

Welcome to the Toolbox Challenge Documentation.

## API

  1. Implement logic for fetching and processing data files
  2. Expose Node.js app over the port 3000

### Api Endpoints
  1. /: return a welcome message
    ![welcome](./images/api/welcome.png)

  2. /health: return app status
    ![health](./images/api/health.png)

  3. /files/list: return the list of files from the toolbox secret API
    ![listFiles](./images/api/list_files.png)

  4. /files/data: return the formatted data from the obtained files
    ![getFilesData](./images/api/get_files_data.png)

## Front
  1. Reflect the data fetched from the API /files/data endpoint as a table
    ![showFiles](./images/front/show_files.png)

  2. Allow user to search the data of an specific file
    ![searchFile](./images/front/search_files.png)
