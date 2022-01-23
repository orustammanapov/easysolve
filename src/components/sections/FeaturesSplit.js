import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  images,
  folder,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    // topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    // topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Workflow that just works',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  const splitItems = Object.keys(images).map(image => {
    let displayName = image.replace('_', ' ');
    return (images[image].map(index => {
      return (
        <div className="split-item">
          <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
            <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
              Lightning fast workflow with {displayName}
              </div>
            <h3 className="mt-0 mb-12">
              {displayName}
              </h3>
            <p className="m-0">
              Insights and bit longer text about the working process with {displayName} 
              </p>
          </div>
          <div className={
            classNames(
              'split-item-image center-content-mobile reveal-from-bottom',
              imageFill && 'split-item-image-fill'
            )}
            data-reveal-container=".split-item">
            <Image
              src={require(`./../../assets/images/${folder}/${image}_${index}.jpeg`)}
              alt={`Features ${displayName} ${index}`}
              width={640}
              height={396} />
          </div>
        </div>
      );
    }))            
  })

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

          {splitItems}

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;