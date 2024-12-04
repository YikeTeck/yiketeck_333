import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  defaultLocale: 'it',
  locales: ['en', 'it', 'zh', 'ru', 'es', 'de', 'fr', 'ja', 'pt']
});
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};