import React from 'react';
import Feed from '../Feed'
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>João Zanchett</h1>
        <h2>@ZanchetJ</h2>

        <p>
          Developer at <a href="https://cwi.com.br/">@CWI</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Rio Grande do Sul, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 04 de Outubro de 1996
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>

          <span>
            <strong>94</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;
