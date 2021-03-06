// Allowing console calls below since this is a build file.
/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'development'; 

console.log('Generating minitied bundle for production via Webpack. This will take a moment...'.green);

webpack(webpackConfig).run( (err, stats) => {
  if (err) { // so a fatal error occured. Stop here
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }
  if (jsonStats.hasWarnings) {
    console.log('Wenpack gemerated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded;
  console.log('Your app has been compiled in production mode and written to /dist. It\'s ready to roll'.green);

  return 0;
});
