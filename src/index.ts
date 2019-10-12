import { useSelector } from 'react-redux';

export const initializeUseSelectors = <ReduxType>() => <SelectorMap extends {}>(
    selectors: { [Selector in keyof SelectorMap]: (state: ReduxType) => SelectorMap[Selector] },
): { [Selector in keyof SelectorMap]: SelectorMap[Selector] } => {
    return Object.keys(selectors).reduce(
        (acc, key) => {
            const selector = selectors[key];

            return { ...acc, [key]: useSelector(selector) };
        },
        {} as { [Selector in keyof SelectorMap]: SelectorMap[Selector] },
    );
};

const useSelectors = initializeUseSelectors();

export default useSelectors;
