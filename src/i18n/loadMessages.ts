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
    designSystemInput,
    designSystemTextarea,
    designSystemSelect,
    designSystemCheckbox,
    designSystemRadio,
    designSystemSwitch,
    designSystemForm,
    designSystemAlert,
    designSystemBadge,
    designSystemSpinner,
    designSystemToast,
    designSystemModal,
    designSystemDrawer,
    designSystemTooltip,
    designSystemAccordion,
    designSystemTabs,
    designSystemCard,
    designSystemAvatar,
    designSystemDivider,

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
    import(`./messages/${locale}/designSystem/components/input.json`),
    import(`./messages/${locale}/designSystem/components/textarea.json`),
    import(`./messages/${locale}/designSystem/components/select.json`),
    import(`./messages/${locale}/designSystem/components/checkbox.json`),
    import(`./messages/${locale}/designSystem/components/radio.json`),
    import(`./messages/${locale}/designSystem/components/switch.json`),
    import(`./messages/${locale}/designSystem/components/form.json`),
    import(`./messages/${locale}/designSystem/components/alert.json`),
    import(`./messages/${locale}/designSystem/components/badge.json`),
    import(`./messages/${locale}/designSystem/components/spinner.json`),
    import(`./messages/${locale}/designSystem/components/toast.json`),
    import(`./messages/${locale}/designSystem/components/modal.json`),
    import(`./messages/${locale}/designSystem/components/drawer.json`),
    import(`./messages/${locale}/designSystem/components/tooltip.json`),
    import(`./messages/${locale}/designSystem/components/accordion.json`),
    import(`./messages/${locale}/designSystem/components/tabs.json`),
    import(`./messages/${locale}/designSystem/components/card.json`),
    import(`./messages/${locale}/designSystem/components/avatar.json`),
    import(`./messages/${locale}/designSystem/components/divider.json`),

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
        input: designSystemInput.default,
        textarea: designSystemTextarea.default,
        select: designSystemSelect.default,
        checkbox: designSystemCheckbox.default,
        radio: designSystemRadio.default,
        switch: designSystemSwitch.default,
        form: designSystemForm.default,
        alert: designSystemAlert.default,
        badge: designSystemBadge.default,
        spinner: designSystemSpinner.default,
        toast: designSystemToast.default,
        modal: designSystemModal.default,
        drawer: designSystemDrawer.default,
        tooltip: designSystemTooltip.default,
        accordion: designSystemAccordion.default,
        tabs: designSystemTabs.default,
        card: designSystemCard.default,
        avatar: designSystemAvatar.default,
        divider: designSystemDivider.default,
      },
    },
    settings: {
      profile: settingsProfile.default,
      preferences: settingsPreferences.default,
    },
  };
}