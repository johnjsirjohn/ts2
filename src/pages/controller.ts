import {
  JsonController,
  Get,
  Param
  // Put,
  // Body,
  // Post,
  // HttpCode
} from 'routing-controllers';
// import pagesById, { Page } from './data';
import Page from './entity';
//type PageList = { pages: Page[] }; is the same as interface PageList {  pages: Page[];}

@JsonController()
export default class PageController {
  @Get('/pages/:id')
  getPage(@Param('id') id: number) {
    return Page.findOne(id);
  }
  @Get('/pages')
  async allPages() {
    return await Page.find();
  }
}
// import pagesById, { Page } from './data';
//type PageList = { pages: Page[] }; is the same as interface PageList {  pages: Page[];}
// @Get('/pages/:id')
// getPage(@Param('id') id: number): Page {
//   return pagesById[id];
// }

// @Get('/pages')
// allPages(): PageList {
//   return { pages: Object.values(id) };
// }

// @Put('/pages/:id')
// updatePage(@Param('id') id: number, @Body() body: Partial<Page>): Page {
//   console.log(`Incoming PUT body param:`, body);
//   return pagesById[id];
// }

// @Post('/pages')
// @HttpCode(201)
// createPage(@Body() body: Page): Page {
//   console.log(`Incoming POST body param:`, body);
//   return body;
// }
//}
