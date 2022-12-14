# Project REST-Rant

**REST-Rant is an app where users can review restaurants.**

## Tech Usage

**CSS Framework:** Bootstrap

**Stack:** MongoDB, Express, NodeJS

**Server-Side Rendering:** JSX

**Node Modules**: method-override, dotenv, express-react-views

## Routes

| Method        | Path             | Purpose                                 |
| :---:         | :---:            | :---                                    |
| GET           | /                | Homepage                                |
| GET           | /places          | Places index page                       |
| POST          | /places          | Create new place                        |
| GET           | /places/new      | Form page for creating a new place      |
| GET           | /places/:id      | Details about a particular place        |
| PUT           | /places/:id      | Update a particular place               |
| GET           | /places/:id/edit | Form page for editing an existing place |

## Data Stored About Each Place/Restaurant

| Data     | Datatype |
| :---     | :---     |
| Name     | *string* |
| City     | *string* |
| Cuisines | *string* |
| Picture  | *string* |