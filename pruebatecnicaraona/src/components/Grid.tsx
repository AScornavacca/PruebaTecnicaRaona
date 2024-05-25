import * as React from 'react';
import {
  DocumentCard,
  DocumentCardTitle,
  DocumentCardDetails,
  DocumentCardImage,
  IDocumentCardStyles,
} from '@fluentui/react/lib/DocumentCard';
import { ImageFit } from '@fluentui/react/lib/Image';

type Props = {
  title?: string,
  date?: string,
  img?: string
}

export const DocumentCardImageExample: React.FunctionComponent<Props> = (props) => {
  const cardStyles: IDocumentCardStyles = {
    root: { display: 'inline-block', marginRight: 20, marginBottom: 20, width: 320 },
  };

  return (
    <div>
      <DocumentCard
        aria-label={
          'Document Card with image. How to make a good design. ' +
          'Last modified by Annie Lindqvist and 2 others in March 13, 2018.'
        }
        styles={cardStyles}
        onClickHref="http://bing.com"
      >
        <DocumentCardImage height={150} imageFit={ImageFit.cover} imageSrc={props.img} />
        <DocumentCardDetails>
          <DocumentCardTitle title={props.title || "" } shouldTruncate />
        </DocumentCardDetails>
        <p>{props.date}</p>
      </DocumentCard>
    </div>
  );
};
