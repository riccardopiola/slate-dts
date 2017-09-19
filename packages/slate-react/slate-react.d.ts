// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../../react

declare module 'slate-react' {
    /**
        * Components.
        */
    import Editor from 'slate-react/components/editor';
    import Placeholder from 'slate-react/components/placeholder';
    /**
        * Utils.
        */
    import findDOMNode from 'slate-react/utils/find-dom-node';
    /**
        * Export.
        *
        * @type {Object}
        */
    export { Editor, Placeholder, findDOMNode };
    const _default: {
            Editor: any;
            Placeholder: any;
            findDOMNode: any;
    };
    export default _default;
}

declare module 'slate-react/components/editor' {
    import React from 'react';
    /**
        * Editor.
        *
        * @type {Component}
        */
    class Editor extends React.Component {
            /**
                * Property types.
                *
                * @type {Object}
                */
            static propTypes: {
                    autoCorrect: any;
                    autoFocus: any;
                    className: any;
                    onBeforeChange: any;
                    onChange: any;
                    placeholder: any;
                    placeholderClassName: any;
                    placeholderStyle: any;
                    plugins: any;
                    readOnly: any;
                    role: any;
                    schema: any;
                    spellCheck: any;
                    state: any;
                    style: any;
                    tabIndex: any;
            };
            /**
                * Default properties.
                *
                * @type {Object}
                */
            static defaultProps: {
                    autoFocus: boolean;
                    autoCorrect: boolean;
                    onChange: any;
                    plugins: any[];
                    readOnly: boolean;
                    schema: {};
                    spellCheck: boolean;
            };
            /**
                * When constructed, create a new `Stack` and run `onBeforeChange`.
                *
                * @param {Object} props
                */
            constructor(props: any);
            /**
                * When the `props` are updated, create a new `Stack` if necessary.
                *
                * @param {Object} props
                */
            componentWillReceiveProps: (props: any) => void;
            /**
                * Cache a `state` in memory to be able to compare against it later, for
                * things like `onDocumentChange`.
                *
                * @param {State} state
                */
            cacheState: (state: any) => void;
            /**
                * Programmatically blur the editor.
                */
            blur: () => void;
            /**
                * Programmatically focus the editor.
                */
            focus: () => void;
            /**
                * Get the editor's current schema.
                *
                * @return {Schema}
                */
            getSchema: () => any;
            /**
                * Get the editor's current state.
                *
                * @return {State}
                */
            getState: () => any;
            /**
                * Perform a change `fn` on the editor's current state.
                *
                * @param {Function} fn
                */
            change: (fn: any) => void;
            /**
                * On change.
                *
                * @param {Change} change
                */
            onChange: (change: any) => void;
            /**
                * Render the editor.
                *
                * @return {Element}
                */
            render(): any;
    }
    export default Editor;
}

declare module 'slate-react/components/placeholder' {
    import React from 'react';
    /**
        * Placeholder.
        *
        * @type {Component}
        */
    class Placeholder extends React.Component {
            /**
                * Property types.
                *
                * @type {Object}
                */
            static propTypes: {
                    children: any;
                    className: any;
                    firstOnly: any;
                    node: any;
                    parent: any;
                    state: any;
                    style: any;
            };
            /**
                * Default properties.
                *
                * @type {Object}
                */
            static defaultProps: {
                    firstOnly: boolean;
            };
            /**
                * Should the placeholder update?
                *
                * @param {Object} props
                * @param {Object} state
                * @return {Boolean}
                */
            shouldComponentUpdate: (props: any, state: any) => boolean;
            /**
                * Is the placeholder visible?
                *
                * @return {Boolean}
                */
            isVisible: () => boolean;
            /**
                * Render.
                *
                * If the placeholder is a string, and no `className` or `style` has been
                * passed, give it a default style of lowered opacity.
                *
                * @return {Element}
                */
            render(): any;
    }
    export default Placeholder;
}

declare module 'slate-react/utils/find-dom-node' {
    /**
      * Find the DOM node for a `node`.
      *
      * @param {Node} node
      * @return {Element}
      */
    function findDOMNode(node: any): Element;
    export default findDOMNode;
}
