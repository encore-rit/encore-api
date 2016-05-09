/**
 * View requires:
 * {
 *   username: String,
 *   message: String,
 *   editedPhoto: link,
 *   photo1: link,
 *   photo2: link,
 *   photo3: link,
 * }
 */

export default `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Encore Email</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,300' rel='stylesheet' type='text/css' />
  </head>

  <body style="margin: 0; padding: 0;">
    <table align="center" cellpadding="0" cellspacing="0" width="600" style="font-family:'Open Sans'; font-size:20px">

      <tr>
        <td align="center">
          <img src="http://encore-rit.github.io/encore-client/banner.jpg" alt="You are rock" width="700" style="display: block;" />
        </td>
      </tr>
      <tr>
        <td bgcolor="#ffffff" style="padding: 40px 50px;">

          <table cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="font-size:24px;">
              <b>Hey there, <%= username %>!</b>
              </td>
            </tr>

            <tr>
              <td style="padding: 20px 0 30px 0;">
                Thanks for getting crazy with us at Imagine RIT! Feel free to download your edited photo here: <a href="<%= editedPhoto %>">rockin' in your super cool photo</a>.

                <ul>
                  <li><a href="<%= photo1 %>">Photo 1</a></li>
                  <li><a href="<%= photo2 %>">Photo 2</a></li>
                  <li><a href="<%= photo3 %>">Photo 3</a></li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>
                Take another look at what you wrote:
              </td>
            </tr>

            <tr>
              <td bgcolor="#ffffff" style="padding: 20px 80px">
                <table cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td style="font-size:16px">
                      <%= message %>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding: 50px 0 30px 0;">
                Post it to instagram and <a href="https://www.instagram.com/explore/tags/youarerock/">check out all the other fans on our feed.</a> Don't forget to hashtag #YOUAREROCK!
              </td>
            </tr>

            <tr>
              <td style="padding: 20px 0 30px 0; font-size:24px;">
                <b>Later,</b><br />
                <b>TEAM ENCORE</b>
              </td>
            </tr>
          </table>

        </td>
      </tr>
    </table>

  </body>
</html>`
