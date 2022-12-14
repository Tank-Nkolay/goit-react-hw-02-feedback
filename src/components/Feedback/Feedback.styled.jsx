import styled from '@emotion/styled';

export const Markup = styled.div`
  margin-top: ${props => props.theme.space[5]};
  padding: ${props => props.theme.space[5]};
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${props => props.theme.space[3]};
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.ll};
`;

export const TitleStatistics = styled.h3`
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${props => props.theme.space[5]};
`;
