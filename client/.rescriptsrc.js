const { editWebpackPlugin } = require( '@rescripts/utilities' );
const isProd = process.env.NODE_ENV === 'production';

module.exports = function( config ) {
    return editWebpackPlugin( function( html ) {
        if ( isProd ) {
            html.options.inject = false;
        }
        return html;
    }, 'HtmlWebpackPlugin', config );
};
