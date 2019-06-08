import './scss/style.scss';
import './scss/fonts.scss';

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

requireAll(require.context('./', true, /^\.\/.*\.js$/));
