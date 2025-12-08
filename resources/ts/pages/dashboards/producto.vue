<script setup lang="ts">
const busqueda = ref('')
const categoriaFiltro = ref(null)

const headers = [
  { title: 'ID', key: 'id', align: 'center' },
  { title: 'PRODUCTO', key: 'nombre' },
  { title: 'CATEGORÍA', key: 'categoria' },
  { title: 'PRECIO', key: 'precio', align: 'center' },
  { title: 'CANTIDAD', key: 'cantidad', align: 'center' },
  { title: 'UNIDAD MEDIDA', key: 'unidadMedida', align: 'center' },
  { title: 'CÓDIGO', key: 'codigo', align: 'center' },
  { title: 'ACCIONES', key: 'acciones', sortable: false },
]

const productos = ref([
  { id: 1, nombre: 'Reloj Elegante', marca: 'Hoeger', categoria: 'Accesorios', precio: 273.67, cantidad: 332, unidadMedida: 'unidad', codigo: 'REL-001', descripcion: 'Reloj de pulsera elegante' },
  { id: 2, nombre: 'Lámpara Moderna', marca: 'Hans', categoria: 'Decoración', precio: 583.13, cantidad: 45, unidadMedida: 'unidad', codigo: 'LAM-002', descripcion: 'Lámpara de escritorio' },
  { id: 3, nombre: 'Audífonos Pro', marca: 'Romaguera', categoria: 'Electrónica', precio: 646.21, cantidad: 120, unidadMedida: 'unidad', codigo: 'AUD-003', descripcion: 'Audífonos inalámbricos' },
  { id: 4, nombre: 'Silla Ejecutiva', marca: 'Kuphal', categoria: 'Muebles', precio: 952.14, cantidad: 28, unidadMedida: 'unidad', codigo: 'SIL-004', descripcion: 'Silla ergonómica' },
  { id: 5, nombre: 'Zapatillas Sport', marca: 'Kreiger', categoria: 'Zapatos', precio: 224.28, cantidad: 85, unidadMedida: 'par', codigo: 'ZAP-005', descripcion: 'Zapatillas deportivas' },
  { id: 6, nombre: 'Bolso Premium', marca: 'Deckow', categoria: 'Accesorios', precio: 946.62, cantidad: 52, unidadMedida: 'unidad', codigo: 'BOL-006', descripcion: 'Bolso de cuero' },
  { id: 7, nombre: 'Café Orgánico', marca: 'Ankunding', categoria: 'Alimentos', precio: 45.50, cantidad: 250, unidadMedida: 'kilo', codigo: 'CAF-007', descripcion: 'Café en grano' },
  { id: 8, nombre: 'Té Verde Premium', marca: 'Haag', categoria: 'Alimentos', precio: 35.80, cantidad: 180, unidadMedida: 'gramo', codigo: 'TE-008', descripcion: 'Té verde importado' },
  { id: 9, nombre: 'Proteína Whey', marca: 'Anderson', categoria: 'Suplementos', precio: 125.00, cantidad: 75, unidadMedida: 'frasco', codigo: 'PRO-009', descripcion: 'Proteína en polvo' },
  { id: 10, nombre: 'Multivitamínico', marca: 'Roberts', categoria: 'Suplementos', precio: 89.99, cantidad: 120, unidadMedida: 'frasco', codigo: 'VIT-010', descripcion: 'Vitaminas completas' },
  { id: 11, nombre: 'Chocolates Artesanales', marca: 'Brown', categoria: 'Alimentos', precio: 28.50, cantidad: 200, unidadMedida: 'caja', codigo: 'CHO-011', descripcion: 'Caja de 12 unidades' },
  { id: 12, nombre: 'Galletas Integrales', marca: 'Miller', categoria: 'Alimentos', precio: 15.75, cantidad: 300, unidadMedida: 'caja', codigo: 'GAL-012', descripcion: 'Caja de galletas' },
  { id: 13, nombre: 'Escritorio Moderno', marca: 'Taylor', categoria: 'Muebles', precio: 450.00, cantidad: 18, unidadMedida: 'unidad', codigo: 'ESC-013', descripcion: 'Escritorio de oficina' },
  { id: 14, nombre: 'Mouse Gaming', marca: 'Wilson', categoria: 'Electrónica', precio: 95.50, cantidad: 145, unidadMedida: 'unidad', codigo: 'MOU-014', descripcion: 'Mouse RGB gaming' },
])

const categorias = computed(() => {
  const cats = [...new Set(productos.value.map(p => p.categoria))]

  return cats.sort()
})

const productosFiltrados = computed(() => {
  if (!categoriaFiltro.value)
    return productos.value

  return productos.value.filter(p => p.categoria === categoriaFiltro.value)
})

const limpiarFiltros = () => {
  categoriaFiltro.value = null
  busqueda.value = ''
}
</script>

<template>
  <VCard>
    <VCardText>
      <VRow class="align-center">
        <VCol cols="12" md="3">
          <VTextField v-model="busqueda" placeholder="Buscar Producto" prepend-inner-icon="ri-search-line"
            density="compact" />
        </VCol>

        <VCol cols="12" md="3">
          <VSelect v-model="categoriaFiltro" :items="categorias" placeholder="Filtrar por Categoría" density="compact"
            clearable />
        </VCol>

        <VCol cols="12" md="2">
          <VBtn color="secondary" variant="tonal" prepend-icon="tabler-refresh" @click="limpiarFiltros">
            Limpiar
          </VBtn>
        </VCol>

        <VCol cols="12" md="4" class="text-right">
          <VBtn color="primary" prepend-icon="ri-add-line">
            Agregar Producto
          </VBtn>
        </VCol>
      </VRow>
    </VCardText>

    <VDataTable :headers="headers" :items="productosFiltrados" :search="busqueda" item-value="id">
      <template #item.id="{ item }">
        <VChip color="secondary" size="small" variant="tonal">
          {{ item.id }}
        </VChip>
      </template>

      <template #item.nombre="{ item }">
        <div>
          <p class="font-weight-medium mb-0">
            {{ item.nombre }}
          </p>
          <span class="text-sm text-medium-emphasis">{{ item.marca }}</span>
        </div>
      </template>

      <!--
        <template #item.precio="{ item }">
        <span class="font-weight-medium">${{ item.precio.toFixed(2) }}</span>
        </template>
      -->

      <template #item.cantidad="{ item }">
        <VChip :color="item.cantidad < 50 ? 'error' : item.cantidad < 100 ? 'warning' : 'success'" size="small">
          {{ item.cantidad }}
        </VChip>
      </template>

      <template #item.unidadMedida="{ item }">
        <VChip color="primary" size="small" variant="tonal">
          {{ item.unidadMedida }}
        </VChip>
      </template>

      <template #item.codigo="{ item }">
        <span class="text-sm font-weight-medium">{{ item.codigo }}</span>
      </template>

      <template #item.acciones>
        <div class="d-flex gap-1">
          <IconBtn size="small">
            <VIcon icon="tabler-eye" />
          </IconBtn>
          <IconBtn size="small">
            <VIcon icon="tabler-edit" />
          </IconBtn>
          <IconBtn size="small">
            <VIcon icon="tabler-trash" />
          </IconBtn>
        </div>
      </template>
    </VDataTable>
  </VCard>
</template>
