# The Census Open Innovation Labs Website

This repo includes code for the COIL website. [coil.census.gov](https://coil.census.gov/)

It is built with [Jekyll](https://jekyllrb.com/docs/) using the [uswds-jekyll theme](https://github.com/18F/uswds-jekyll)

<br/>

## Dependencies

1. Ruby v2.2.2+, [Installation guides](https://www.ruby-lang.org/en/documentation/installation/)
2. Node v4.2.3+, [Installation guides](https://nodejs.org/en/download/)
3. Bundler v1.12.3+, [Installation guides](http://bundler.io/v1.13/guides/using_bundler_inpmn_application.html#getting-started---installing-bundler-and-bundle-init)
   a. jekyll (`gem install jekyll`)
4. Chrome v59 or higher (v60 if on Windows)

<br/>

## Getting Started

To work on the site, switch to your local copy of the repository in terminal then run the following command to install project dependencies:

```sh
npm install
bundle install
```

Now that all of your dependencies are installed, you can run your local server by running the following command:

```sh
npm start
```

Go to `127.0.0.1:4000` in your browser — you should be viewing a local instance

- `npm run watch`: Runs a series of commands that watches for any changes in both USWDS node module and the root level asset folders in this repo.

- `npm start -- --incremental` or `npm run serve`: Runs your local server with incremental regeneration enabled to greatly improve build time. Use instead of `npm start`.


**NOTE: Some systems will not compile correctly. Therefore a change in liquid tag logic (ex. html files) is needed to update any change.**

<br/>

## Updating Content

### Team Photos

- Change the coil_people.yml file to reflect current team
- Add both .png/.jpg and .webp files to the assets/img/team folder 
   -  Without the .webp file the photo WILL NOT load correctly on the site
- The .webp file needs to have a size of 214x271


## Testing

### HTML Validation

run `npm run html-proofer` to validate the site's HTML, check broken links, missing images & alts, etc with [HTMLProofer](https://github.com/gjtorikian/html-proofer).

run `npm run html-proofer:skip-external` to save time by skipping validating external links

<br/>

## Building with Federalist

This repository is hooked up to [Federalist](https://federalist.18f.gov/documentation/), an automatic build process used by many government websites.
Whenever you push changes to Github, Federalist will make a new build (using the `federalist` command in `package.json`). 

Federalist will then provide a URL for this build which you can use for user testing. To get the URL for the build, click on the green check-mark next to the build status for whatever branch you just pushed to, and then click the "Details" link.

When you merge a branch into `main`, Federalist will then make a new build with the same process and deploy it to opportunity.census.gov

### When a build fails

If Federalist fails to build, the status dot on the branch in Github will change from yellow (in progress) to red (failed). If this happens, contact Logan Powell via Slack in the Census Bureau workspace to see the logs from the failed build. He has access to Federalist itself. We do not.
