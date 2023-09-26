import React from 'react';

import {
  Container,
  TitleWrapper,
  ContentWrapper,
  Title,
  Subtitle
} from './styles';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  children
}) => {
  return (
    <Container>
      <TitleWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TitleWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  );
};

export default PageHeader;
