import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import i18n from '../i18n/index.json';

describe('English language tests', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders heading', () => {
    expect(screen.getByText(i18n.en.TEXT_HEADING_CREATE_ACCOUNT)).toBeInTheDocument();
  });

  test('renders username label', () => {
    expect(screen.getByLabelText(i18n.en.LABEL_USERNAME)).toBeInTheDocument();
  });

  test('renders username placeholder', () => {
    expect(screen.getByPlaceholderText(i18n.en.PLACEHOLDER_USERNAME)).toBeInTheDocument();
  });

  test('renders favorite food label', () => {
    expect(screen.getByLabelText(i18n.en.LABEL_FAV_FOOD)).toBeInTheDocument();
  });

  test('renders favorite food options', () => {
    expect(screen.getByText(i18n.en.TEXT_OPT_FAV_FOOD_1)).toBeInTheDocument();
    expect(screen.getByText(i18n.en.TEXT_OPT_FAV_FOOD_2)).toBeInTheDocument();
    expect(screen.getByText(i18n.en.TEXT_OPT_FAV_FOOD_3)).toBeInTheDocument();
    expect(screen.getByText(i18n.en.TEXT_OPT_FAV_FOOD_4)).toBeInTheDocument();
  });

  test('renders accept terms label', () => {
    expect(screen.getByLabelText(i18n.en.LABEL_ACCEPT_TERMS)).toBeInTheDocument();
  });

  test('renders submit button', () => {
    expect(screen.getByText(i18n.en.TEXT_SUBMIT)).toBeInTheDocument();
  });
});

describe('Spanish language tests', () => {
  beforeEach(() => {
    render(<App />);
    fireEvent.click(screen.getByText('🇪🇸')); // Toggle to Spanish
  });

  test('renders heading', () => {
    expect(screen.getByText(i18n.esp.TEXT_HEADING_CREATE_ACCOUNT)).toBeInTheDocument();
  });

  test('renders username label', () => {
    expect(screen.getByLabelText(i18n.esp.LABEL_USERNAME)).toBeInTheDocument();
  });

  test('renders username placeholder', () => {
    expect(screen.getByPlaceholderText(i18n.esp.PLACEHOLDER_USERNAME)).toBeInTheDocument();
  });

  test('renders favorite food label', () => {
    expect(screen.getByLabelText(i18n.esp.LABEL_FAV_FOOD)).toBeInTheDocument();
  });

  test('renders favorite food options', () => {
    expect(screen.getByText(i18n.esp.TEXT_OPT_FAV_FOOD_1)).toBeInTheDocument();
    expect(screen.getByText(i18n.esp.TEXT_OPT_FAV_FOOD_2)).toBeInTheDocument();
    expect(screen.getByText(i18n.esp.TEXT_OPT_FAV_FOOD_3)).toBeInTheDocument();
    expect(screen.getByText(i18n.esp.TEXT_OPT_FAV_FOOD_4)).toBeInTheDocument();
  });

  test('renders accept terms label', () => {
    expect(screen.getByLabelText(i18n.esp.LABEL_ACCEPT_TERMS)).toBeInTheDocument();
  });

  test('renders submit button', () => {
    expect(screen.getByText(i18n.esp.TEXT_SUBMIT)).toBe

    // helper.js
export const getEntriesByKeyPrefix = (obj, prefix) => {
  return Object.keys(obj)
    .filter((key) => key.startsWith(prefix))
    .reduce((res, key) => {
      res[key] = obj[key];
      return res;
    }, {});
};


// helper.test.js
import { getEntriesByKeyPrefix } from './helper';

describe('getEntriesByKeyPrefix', () => {
  test('returns correct entries', () => {
    const obj = {
      'prefix_key1': 'value1',
      'prefix_key2': 'value2',
      'other_key': 'value3',
    };

    const result = getEntriesByKeyPrefix(obj, 'prefix');
    expect(result).toEqual({
      'prefix_key1': 'value1',
      'prefix_key2': 'value2',
    });
  });

  // Add more tests as needed
});

