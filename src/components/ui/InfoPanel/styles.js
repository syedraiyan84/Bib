import { css } from '@emotion/css';
import { controlPanelWidth, panelMargin, panelPadding } from 'utils/variables';

export const visible = css`
  label: visible;
`;

export const notshifted = css`
  label: not-shifted;
`;

export const shifted = css`
  label: shifted;
`;

export const infoPanel = (uiStyle) => css`
  label: info-panel;
  visibility: hidden;
  position: absolute;
  width: max-content;
  bottom: 0;
  margin: ${panelMargin}px;
  padding: ${panelPadding}px;
  font-size: 0.75rem !important;

  &${`.${visible}`} {
    visibility: unset;
  }

  &${`.${notshifted}`} {
    transition: left 0.3s;
    left: 0px;
  }
  
  &${`.${shifted}`} {
    transition: left 0.3s;
    left: ${controlPanelWidth}px;
  }

  hr {
    height: 1px;
    border: none;
    flex-shrink: 0;
    background-color: rgba(0, 0, 0, 0.12);
  }

  p {
    font-size: 0.75rem;
  }

  table {
    font-size: 0.75rem !important;
    tr {
      td:first-child {
        min-width: 80px;
      }
    }
    color: inherit;
  }

  a {
    text-decoration: none;
    color: ${uiStyle.palette_primary_main_color};
  }
`;

export const description = (componentWidth) => {
  const descriptionMargin = 4;
  const descriptionWidth = componentWidth - 2 * panelMargin - 2 * panelPadding - 2 * descriptionMargin;
  const descriptionMaxWidth = descriptionWidth > 750 ? 750 : descriptionWidth;
  return css`
  label: description;
  min-width: 400px;
  max-width: ${descriptionMaxWidth}px;
  margin: 0px ${descriptionMargin}px !important;
  font-size: 0.75rem !important;
  `;
};

export const divider = css`
  label: divider;
  display: inline !important;
  color: rgba(148, 148, 147, 0.8) !important;
`;

export const info = css`
  label: info;
  display: flex;
  font-size: 0.75rem !important;
`;

export const infoItem = css`
  label: info-item;
  display: inline !important;
  padding: 0px 4px;
`;

export const closeButton = css`
  label: close-button;
  position: absolute !important;
  top: 0;
  right: 0;
  padding: 10px !important;
`;
