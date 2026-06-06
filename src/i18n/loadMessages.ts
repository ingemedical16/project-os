import type { AbstractIntlMessages } from 'next-intl';

import type { Locale } from './routing';

export async function loadMessages(
  locale: Locale,
): Promise<AbstractIntlMessages> {
  const [
    sharedButtons,
    sharedForms,
    sharedValidation,
    sharedErrors,

    layoutHeader,
    layoutFooter,
    layoutSidebar,

    authLogin,
    authRegister,
    authForgotPassword,

    dashboardOverview,
    dashboardAnalytics,

    designSystemPage,
    designSystemButton,

    settingsProfile,
    settingsPreferences,
  ] = await Promise.all([
    import(`./messages/${locale}/shared/buttons.json`),
    import(`./messages/${locale}/shared/forms.json`),
    import(`./messages/${locale}/shared/validation.json`),
    import(`./messages/${locale}/shared/errors.json`),

    import(`./messages/${locale}/layout/header.json`),
    import(`./messages/${locale}/layout/footer.json`),
    import(`./messages/${locale}/layout/sidebar.json`),

    import(`./messages/${locale}/auth/login.json`),
    import(`./messages/${locale}/auth/register.json`),
    import(`./messages/${locale}/auth/forgot-password.json`),

    import(`./messages/${locale}/dashboard/overview.json`),
    import(`./messages/${locale}/dashboard/analytics.json`),

    import(`./messages/${locale}/designSystem/page.json`),
    import(`./messages/${locale}/designSystem/components/button.json`),

    import(`./messages/${locale}/settings/profile.json`),
    import(`./messages/${locale}/settings/preferences.json`),
  ]);

  return {
    shared: {
      buttons: sharedButtons.default,
      forms: sharedForms.default,
      validation: sharedValidation.default,
      errors: sharedErrors.default,
    },
    layout: {
      header: layoutHeader.default,
      footer: layoutFooter.default,
      sidebar: layoutSidebar.default,
    },
    auth: {
      login: authLogin.default,
      register: authRegister.default,
      forgotPassword: authForgotPassword.default,
    },
    dashboard: {
      overview: dashboardOverview.default,
      analytics: dashboardAnalytics.default,
    },
    designSystem: {
      page: designSystemPage.default,
      components: {
        button: designSystemButton.default,
      },
    },
    settings: {
      profile: settingsProfile.default,
      preferences: settingsPreferences.default,
    },
  };
}