import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

interface GaugeProps {
  className?: string;
  color?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'success'
    | 'info'
    | 'white'
    | 'trueWhite';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  circleRatio?: number;
  styles?: any;
  value?: number;
  text: any;
  strokeWidth?: number;
  children?: ReactNode;
}

const GaugeWrapper = styled(CircularProgressbarWithChildren)(
  ({ theme }) => `
  
  &.CircularProgressbar {
    vertical-align: middle;
    width: 80%;
    margin: 0 auto;
    display: flex;
    
    & + [data-test-id="CircularProgressbarWithChildren__children"] {
      margin-top: 0 !important;
      top: 0;
    }

    .CircularProgressbar-path {
      stroke-linecap: round;
      transition: stroke-dashoffset 0.5s ease 0s;
    }
  
    .CircularProgressbar-trail {
      stroke-linecap: round;
    }
    
    .CircularProgressbar-text {
      font-size: ${theme.typography.pxToRem(15)};
      dominant-baseline: middle;
      text-anchor: middle;
      font-weight: bold;
    }
  
    &.MuiGauge {
      &-xsmall {
        max-width: 48px;
      }
      &-small {
        max-width: 62px;
        .CircularProgressbar-text {
          font-weight: bold;
          font-size: ${theme.typography.pxToRem(24)};
        }
      }
      &-medium {
        max-width: 120px;
      }
      &-large {
        max-width: 140px;
      }
      &-xlarge {
        max-width: 180px;
      }
      &-xxlarge {
        max-width: 230px;
      }
      
      &-primary {

        .CircularProgressbar-path {
          stroke: ${theme.colors.primary.main};
        }
    
        .CircularProgressbar-trail {
          stroke: ${theme.colors.alpha.black[10]};
        }
    
        .CircularProgressbar-text {
          fill: ${theme.colors.alpha.black[100]};
        }
    
        .CircularProgressbar-background {
          fill: rgba(${theme.colors.primary.main}, .05);
        }
      }

      &-success {

        .CircularProgressbar-path {
          stroke: ${theme.colors.success.main};
        }
    
        .CircularProgressbar-trail {
          stroke: ${theme.colors.alpha.black[10]};
        }
    
        .CircularProgressbar-text {
          fill: ${theme.colors.alpha.black[100]};
        }
    
        .CircularProgressbar-background {
          fill: rgba(${theme.colors.success.main}, .05);
        }
      }

      &-warning {

        .CircularProgressbar-path {
          stroke: ${theme.colors.warning.main};
        }
    
        .CircularProgressbar-trail {
          stroke: ${theme.colors.alpha.black[10]};
        }
    
        .CircularProgressbar-text {
          fill: ${theme.colors.alpha.black[100]};
        }
    
        .CircularProgressbar-background {
          fill: rgba(${theme.colors.warning.main}, .05);
        }
      }
      
      &-error {

        .CircularProgressbar-path {
          stroke: ${theme.colors.error.main};
        }
    
        .CircularProgressbar-trail {
          stroke: ${theme.colors.alpha.black[10]};
        }
    
        .CircularProgressbar-text {
          fill: ${theme.colors.alpha.black[100]};
        }
    
        .CircularProgressbar-background {
          fill: rgba(${theme.colors.error.main}, .05);
        }
      }
      
      &-info {

        .CircularProgressbar-path {
          stroke: ${theme.colors.info.main};
        }
    
        .CircularProgressbar-trail {
          stroke: ${theme.colors.alpha.black[10]};
        }
    
        .CircularProgressbar-text {
          fill: ${theme.colors.alpha.black[100]};
        }
    
        .CircularProgressbar-background {
          fill: rgba(${theme.colors.info.main}, .05);
        }
      }

      &-success {

        .CircularProgressbar-path {
          stroke: ${theme.colors.success.main};
        }
    
        .CircularProgressbar-trail {
          stroke: ${theme.colors.alpha.black[10]};
        }
    
        .CircularProgressbar-text {
          fill: ${theme.colors.alpha.black[100]};
        }
    
        .CircularProgressbar-background {
          fill: rgba(${theme.colors.success.main}, .05);
        }
      }

      &-warning {

        .CircularProgressbar-path {
          stroke: ${theme.colors.warning.main};
        }
    
        .CircularProgressbar-trail {
          stroke: ${theme.colors.alpha.black[10]};
        }
    
        .CircularProgressbar-text {
          fill: ${theme.colors.alpha.black[100]};
        }
    
        .CircularProgressbar-background {
          fill: rgba(${theme.colors.warning.main}, .05);
        }
      }
      
      &-error {

        .CircularProgressbar-path {
          stroke: ${theme.colors.error.main};
        }
    
        .CircularProgressbar-trail {
          stroke: ${theme.colors.alpha.black[10]};
        }
    
        .CircularProgressbar-text {
          fill: ${theme.colors.alpha.black[100]};
        }
    
        .CircularProgressbar-background {
          fill: rgba(${theme.colors.error.main}, .05);
        }
      }
      
      &-info {

        .CircularProgressbar-path {
          stroke: ${theme.colors.info.main};
        }
    
        .CircularProgressbar-trail {
          stroke: ${theme.colors.alpha.black[10]};
        }
    
        .CircularProgressbar-text {
          fill: ${theme.colors.alpha.black[100]};
        }
    
        .CircularProgressbar-background {
          fill: rgba(${theme.colors.info.main}, .05);
        }
      }
      
      &-white {

        .CircularProgressbar-path {
          stroke: ${theme.colors.alpha.white[100]};
        }
    
        .CircularProgressbar-trail {
          stroke: ${theme.colors.alpha.white[30]};
        }
    
        .CircularProgressbar-text {
          fill: ${theme.colors.alpha.white[100]};
        }
      }

      &-trueWhite {

        .CircularProgressbar-path {
          stroke: ${theme.colors.alpha.trueWhite[100]};
        }
    
        .CircularProgressbar-trail {
          stroke: ${theme.colors.alpha.trueWhite[30]};;
        }
    
        .CircularProgressbar-text {
          fill: ${theme.colors.alpha.trueWhite[100]};
        }
      }
    }
  }
`
);

const Gauge: FC<GaugeProps> = ({
  className,
  color = 'primary',
  size = 'medium',
  circleRatio,
  value,
  styles,
  text,
  strokeWidth,
  children,
  ...rest
}) => {
  return (
    <GaugeWrapper
      circleRatio={circleRatio}
      value={value}
      text={text}
      strokeWidth={strokeWidth}
      styles={styles}
      className={`MuiGauge-${color} MuiGauge-${size}`}
      {...rest}
    >
      {children}
    </GaugeWrapper>
  );
};

Gauge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  styles: PropTypes.any,
  value: PropTypes.number,
  text: PropTypes.any,
  strokeWidth: PropTypes.number,
  circleRatio: PropTypes.number,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'error',
    'warning',
    'success',
    'info',
    'white',
    'trueWhite'
  ]),
  size: PropTypes.oneOf([
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge'
  ])
};

export default Gauge;
