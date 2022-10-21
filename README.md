# Project REST-Rant

REST-Rant is an app where users can review restaurants.

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