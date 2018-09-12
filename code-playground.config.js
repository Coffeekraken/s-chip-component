module.exports = {
  // server port
  port: 3000,

  // title
  title: 's-chip-component',

  // layout
  layout: 'right',

  // compile server
  compileServer: {

    // compile server port
    port: 4000

  },

  // editors
  editors: {
    html: {
      language: 'html',
      data: `
        <h1 class="h3 m-b-small">
          Coffeekraken s-chip-component
        </h1>
        <p class="p m-b-bigger">
          Provide a nice and simple chip element
        </p>

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

        <span class="chip">
          <span class="chip__addon">
            <i class="fa fa-user"></i>
          </span>
          <span class="chip__text">
            Hello world
          </span>
        </span>

        <span class="chip chip--closable">
          <span class="chip__text">
            Hello world
          </span>
          <span class="chip__addon">
            <i class="fa fa-times"></i>
          </span>
        </span>

        <span class="chip chip--closable">
          <span class="chip__text">
            Hello world
          </span>
        </span>

        <span class="chip chip--primary">
            <span class="chip__text">
              Hello world
            </span>
            <span class="chip__addon">
              <i class="fa fa-cog"></i>
            </span>
          </span>

          <span class="chip chip--secondary">
            <span class="chip__addon">
              <img src="http://graph.facebook.com/622487880/picture?type=square" />
            </span>
            <span class="chip__text">
              Hello world
            </span>
          </span>

          <span class="chip chip--success">
            <span class="chip__addon">
              <i class="fa fa-cog"></i>
            </span>
            <span class="chip__text">
              Hello world
            </span>
          </span>

          <span class="chip chip--error">
            <span class="chip__addon">
              <i class="fa fa-cog"></i>
            </span>
            <span class="chip__text">
              Hello world
            </span>
          </span>

          <span class="chip chip--warning">
            <span class="chip__addon">
              <img src="http://graph.facebook.com/622487880/picture?type=square" />
            </span>
            <span class="chip__text">
              Hello world
            </span>
            <span class="chip__addon">
              <i class="fa fa-cog"></i>
            </span>
          </span>

          <span class="chip chip--info">
            <span class="chip__addon">
              <i class="fa fa-cog"></i>
            </span>
            <span class="chip__text">
              Hello world
            </span>
          </span>
      `
    },
    css: {
      language: 'sass',
      data: `
        @import 'node_modules/coffeekraken-sugar/index';
        @import 'node_modules/coffeekraken-s-typography-component/index';
        @import 'index';
        @include s-init();
        @include s-classes();
        @include s-typography-classes();
        body {
          padding: s-space(bigger);
        }
        @include s-chip-classes(
          $colors: default primary secondary success error warning info
        );
        .chip {
          font-size: s-rem(12px);
          margin-bottom: s-space(default);
        }
      `
    },
    js: false
  }
}
