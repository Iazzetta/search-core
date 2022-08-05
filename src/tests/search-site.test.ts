import { fakeSites } from "../infra/data-sources/sites";
import { makeLoadSearchSiteController } from "../main/factories/search-site";

test('search sites status code and response', async () => {
    const controller = makeLoadSearchSiteController()
    const httpResponse = await controller.handle('')
    expect(httpResponse.statusCode).toBe(200);
    expect(httpResponse.data).toStrictEqual(fakeSites.map(item => ({
        ...item, 
        createdAt: new Date(item.createdAt), 
        updatedAt: new Date(item.updatedAt)
    })));
});

test('search sites status code and response with filter', async () => {
    const controller = makeLoadSearchSiteController()
    const httpResponse = await controller.handle('rock')
    expect(httpResponse.statusCode).toBe(200);
    expect(httpResponse.data).toStrictEqual([{
        url: 'https://rock.com.br',
        title: "Rock The Bank",
        description: "Plataforma de educação financeira",
        score: 10,
        createdAt: new Date('1906-08-14T03:06:28.000Z'),
        updatedAt: new Date('1906-08-14T03:06:28.000Z'),
    }]);
});