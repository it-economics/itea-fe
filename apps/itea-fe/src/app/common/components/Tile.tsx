import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { FC, PropsWithChildren, ReactNode } from 'react';

interface TileProps {
  title: string;
  actions?: ReactNode;
}

export const Tile: FC<PropsWithChildren<TileProps>> = ({
  children,
  title,
  actions,
}) => {
  return (
    <Card
      sx={(theme) => ({
        width: 320,
        padding: theme.spacing(),
        textAlign: 'center',
      })}
    >
      <Typography variant="h5">{title}</Typography>
      <CardContent>{children}</CardContent>
      {actions && (
        <CardActions sx={{ justifyContent: 'right' }}>{actions}</CardActions>
      )}
    </Card>
  );
};
