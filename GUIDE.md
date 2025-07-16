# 📁 Project Structure

```
src/
├── 📂 app/
│ ├── 📂 api/
│ │  └── 📂 azki-proxy/
│ │     ├── 📂 [...slug]/
│ │     └── 🌐 route.ts
│ ├── 📄 register/
│ │  └── 📄 page.tsx
│ ├── 📄 third-party-insurance/
│ │  └── 📄 page.tsx
│ ├── 📄 error.tsx
│ ├── 📄 favicon.ico
│ ├── 📄 layout.tsx
│ ├── 📄 loading.tsx
│ ├── 📄 not-found.tsx
│ ├── 📄 page.tsx
│ └── 📄 providers.tsx
│
├── 📂 components/
│ ├── 📂 common/
│ │  └── 📂 header/
│ │     ├── 🗂 Dropdown.tsx
│ │     ├── 🗂 Header.tsx
│ │     └── 🗂 UserHeaderProfile.tsx
│ │
│ ├── 📂 controlled/
│ │  ├── 🗂 RHFControlledInput.tsx
│ │  └── 🗂 RHFControlledSelect.tsx
│ │
│ ├── 📂 forms/
│ │  └── 🗂 RegisterForm.tsx
│ │
│ ├── 📂 insurance/
│ │  ├── 🗂 InsuranceItemButton.tsx
│ │  └── 🗂 InsuranceList.tsx
│ │
│ ├── 📂 svg/
│ │  └── 🗂 InsuranceSVGIcon.tsx
│ │
│ ├── 📂 template/
│ │  └── 🗂 MainLayout.tsx
│ │
│ ├── 📂 tpi-wizard/
│ │  ├── 🗂 TPIWizardCompanyStep.tsx
│ │  ├── 🗂 TPIWizardDiscountsStep.tsx
│ │  ├── 🗂 TPIWizardReport.tsx
│ │  ├── 🗂 TPIWizardVehicleTypeStep.tsx
│ │  ├── 🗂 WizardThirdPartyFactory.tsx
│ │  └── 🗂 WizardThirdPartyInsurance.tsx
│ │
│ └── 📂 UI/
│   ├── 🗂 Button.tsx
│   ├── 🗂 Col.tsx
│   ├── 🗂 Input.tsx
│   ├── 🗂 Logo.tsx
│   ├── 🗂 Modal.tsx
│   ├── 🗂 Row.tsx
│   └── 🗂 Select.tsx
│
├── 📂 hooks/
│  ├── 🗂 useCompanies.ts
│  ├── 🗂 useThirdDiscounts.ts
│  ├── 🗂 useThirdPartyWizard.ts
│  └── 🗂 useVehicleTypes.ts
│
├── 📂 lib/
│  ├── 📂 actions/
│  │  └── 🗂 auth.actions.ts
│  │
│  ├── 📂 constants/
│  │  └── 📄 insurances.json
│  │
│  ├── 📂 schemas/
│  │  ├── 🗂 index.ts
│  │  ├── 🗂 register.schema.ts
│  │  └── 🗂 thirdPartyInsurance.schema.ts
│  │
│  └── 📂 types/
│     ├── 🗂 third-companies.ts
│     ├── 🗂 third-discounts.ts
│     ├── 🗂 third-party-insurance-wizard.ts
│     └── 🗂 vehicle-types.ts
│
├── 📂 store/
│  ├── 📂 slices/
│  │  ├── 🗂 authSlice.ts
│  │  └── 🗂 tpiWizardSlice.ts
│  │
│  ├── 🗂 hooks.ts
│  ├── 🗂 index.ts
│  ├── 🗂 ReduxProvider.tsx
│  └── 🗂 rootReducer.ts
│
├── 📂 styles/
│  ├── 📄 _base.scss
│  ├── 📄 _font.scss
│  ├── 📄 _reset.scss
│  ├── 📄 _tailwind.scss
│  ├── 📄 _variables.scss
│  ├── 📄 index.scss
│  └── 📄 MainLayout.module.scss
│
└── 📂 utils/
   └── 🗂 getValidTPIWizardStep.ts
```

