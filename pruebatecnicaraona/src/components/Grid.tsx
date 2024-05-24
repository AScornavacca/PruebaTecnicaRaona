import * as React from 'react';
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardTitle,
  DocumentCardDetails,
  DocumentCardImage,
  IDocumentCardStyles,
  IDocumentCardActivityPerson,
} from '@fluentui/react/lib/DocumentCard';
import { IIconProps } from '@fluentui/react/lib/Icon';
import { ImageFit } from '@fluentui/react/lib/Image';
import { TestImages } from '@fluentui/example-data';

const people: IDocumentCardActivityPerson[] = [

];

const oneNoteIconProps: IIconProps = {
  iconName: 'OneNoteLogo',
  styles: { root: { color: '#813a7c', fontSize: '120px', width: '120px', height: '120px' } },
};
type Props = {
    title?: any,
    date?: string,
    img?: string
}
export const DocumentCardImageExample: React.FunctionComponent = (props: Props) => {
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
          <DocumentCardTitle title={props.title} shouldTruncate />
        </DocumentCardDetails>
        <p>{props.date}</p>
      </DocumentCard>
    </div>
  );
};
