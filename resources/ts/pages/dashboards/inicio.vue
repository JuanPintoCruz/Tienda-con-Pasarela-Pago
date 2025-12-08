<template>
  <VContainer
    fluid
    class="fill-height d-flex align-center justify-center"
  >
    <VRow
      align="center"
      justify="center"
    >
      <VCol
        cols="12"
        sm="8"
        md="6"
        lg="4"
      >
        <VCard class="py-6 px-6 text-center">
          <VCardTitle class="text-h4 font-weight-bold mb-2">
            Bienvenido, Administrador
          </VCardTitle>

          <VCardText class="text-body-1 text-medium-emphasis">
            Gestiona tu tienda virtual, revisa las ventas, pedidos y estadísticas desde este panel de control.
          </VCardText>

          <VCardActions class="mt-4 justify-center">
            <VBtn
              color="primary"
              variant="flat"
              to="/dashboards/ecommerce"
            >
              Ir al dashboard de e-commerce
            </VBtn>
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
