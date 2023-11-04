import React from "react";
import "./ListAlbums.scss";
import { Loader, Grid, Image } from "semantic-ui-react";
import { map, size } from "lodash";
import { Link } from "react-router-dom";

const ListAlbums = ({ albums }) => {
  if (size(albums) === 0) {
    return (
      <Loader active inline="centered" size="large">
        Cargando
      </Loader>
    );
  }

  return (
    <Grid className="list-albums">
      <Grid.Row columns={5}>
        {map(albums, (album) => {
          const { id, image, name } = album;
          return (
            <Grid.Column
              key={id}
              as={Link}
              to={`/albums/${id}`}
              className="list-albums__album"
            >
              <Image src={image} alt={name} />
              <p>{name}</p>
            </Grid.Column>
          );
        })}
      </Grid.Row>
    </Grid>
  );
};

export default ListAlbums;
