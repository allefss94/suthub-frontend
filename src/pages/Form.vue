<template>
  <div class="min-h-full">
    <h1 class="text-3xl mt-5">Preencha os campos a seguir</h1>
    <form
      @submit.prevent="submitForm"
      class="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full lg:w-3/4 justify-center lg:justify-start text-gray-600 my-5"
    >
      <div class="field flex flex-col">
        <label for="nome">Nome</label>
        <input
          type="text"
          name="nome"
          v-model="form.nome"
          placeholder="Nome e Sobrenome"
          class="px-2 py-1 shadow rounded focus:outline-none"
        />
        <p
          class="text-red-400 text-md font-light"
          v-if="!$v.form.nome.required && $v.form.nome.$dirty"
        >
          Informe seu Nome.
        </p>
        <p
          class="text-red-400 text-md font-light"
          v-else-if="!$v.form.nome.secondNameValidation && $v.form.nome.$dirty"
        >
          Informe seu Sobrenome.
        </p>
      </div>

      <div class="field flex flex-col">
        <label for="idade">Data de Nascimento</label>
        <input
          v-mask="'##/##/####'"
          type="text"
          name="idade"
          v-model="form.idade"
          placeholder="00/00/0000"
          class="px-2 py-1 shadow rounded focus:outline-none"
        />

        <p
          class="text-red-400 text-md font-light"
          v-if="
            (!$v.form.idade.required || !$v.form.idade.minLength) &&
            $v.form.idade.$dirty
          "
        >
          Informe uma data válida.
        </p>
        <p
          class="text-red-400 text-md font-light"
          v-else-if="!$v.form.idade.minAge && $v.form.idade.$dirty"
        >
          Idade minima de 18 anos.
        </p>
        <p
          class="text-red-400 text-md font-light"
          v-else-if="!$v.form.idade.maxAge && $v.form.idade.$dirty"
        >
          Idade máxima de 65 anos.
        </p>
      </div>

      <div class="field flex flex-col">
        <label for="pet">Pet</label>
        <select
          v-model="form.pet"
          name="pet"
          aria-placeholder="Selecione um Pet"
          class="bg-white px-2 py-1.5 capitalize shadow text-gray-400 rounded focus:outline-none"
        >
          <option value="" disabled selected>Selecione um Pet</option>
          <option v-for="pet in pet.tipo" :key="pet">
            {{ pet }}
          </option>
        </select>

        <p
          class="text-red-400 text-md font-light"
          v-if="!$v.form.pet.required && $v.form.pet.$dirty"
        >
          Selecrione um Pet.
        </p>
      </div>

      <div>
        <transition name="fade" mode="out-in" appear>
          <div v-if="hasSelectedPet" class="field flex flex-col">
            <label for="raca">Raça</label>
            <select
              name="raca"
              v-model="form.raca"
              class="bg-white px-2 py-1.5 shadow text-gray-400 rounded focus:outline-none capitalize"
            >
              <option value="" disabled selected>Selecione uma Raça</option>
              <option
                v-for="raca in pet.racas[`${form.pet}`]"
                :key="raca"
                :value="raca"
              >
                {{ raca }}
              </option>
            </select>
            <p
              class="text-red-400 text-md font-light"
              v-if="!$v.form.raca.required && $v.form.raca.$dirty"
            >
              Selecione uma Raça.
            </p>
          </div>
          <div v-else class="field flex flex-col">
            <label for="otherBreed">Nos conte sobre seu Pet:</label>
            <input
              type="text"
              v-model="form.raca"
              class="px-2 py-1 shadow rounded focus:outline-none"
            />
          </div>
        </transition>
      </div>
      <div class="field flex flex-col">
        <label for="renda">Renda Mensal</label>
        <CurrencyInput
          v-model="form.rendaMensal"
          class="px-2 py-1 shadow rounded text-gray-400 focus:outline-none"
        />
        <p
          class="text-red-400 text-md font-light"
          v-if="!$v.form.rendaMensal.minValue && $v.form.rendaMensal.$dirty"
        >
          O valor minimo é R$ 1.000,00.
        </p>
      </div>
      <div class="flex items-end">
        <div class="flex flex-1 flex-col">
          <label for="cep">CEP</label>
          <input
            v-mask="'#####-###'"
            type="text"
            v-model="form.endereco.cep"
            class="px-2 py-1 shadow rounded text-gray-400 focus:outline-none"
          />
          <p
            class="text-red-400 text-md font-light"
            v-if="!$v.form.endereco.cep.required && $v.form.endereco.cep.$dirty"
          >
            Informe seu CEP.
          </p>
          <p
            class="text-red-400 text-md font-light"
            v-if="
              !$v.form.endereco.cep.minLength && $v.form.endereco.cep.$dirty
            "
          >
            O CEP deve conter no 9 numeros.
          </p>
        </div>
        <button
          type="button"
          :disabled="form.endereco.cep.length < 9"
          @click="searchCep"
          :class="
            form.endereco.cep.length < 9
              ? 'bg-gray-400 shadow cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700 transition'
          "
          class="px-1.5 text-sm h-8 ml-2 rounded focus:outline-none text-white whitespace-nowrap"
        >
          O
        </button>
      </div>

      <div class="field flex flex-col">
        <label for="estado">Estado</label>
        <input
          v-model="form.endereco.estado"
          type="text"
          maxlength="2"
          class="px-2 py-1 shadow rounded text-gray-400 focus:outline-none uppercase"
        />
        <p
          class="text-red-400 text-md font-light"
          v-if="
            !$v.form.endereco.estado.required && $v.form.endereco.estado.$dirty
          "
        >
          Informe UF corresponde ao seu Estado.
        </p>
      </div>

      <div class="field flex flex-col">
        <label for="cidade">Cidade</label>
        <input
          type="text"
          name="cidade"
          v-model="form.endereco.cidade"
          class="px-2 py-1 shadow rounded text-gray-400 focus:outline-none"
        />
        <p
          class="text-red-400 text-md font-light"
          v-if="
            !$v.form.endereco.cidade.required && $v.form.endereco.cidade.$dirty
          "
        >
          Informe sua Cidade
        </p>
      </div>

      <div class="field flex flex-col">
        <label for="logradouro">Logradouro</label>
        <input
          type="text"
          name="logradouro"
          v-model="form.endereco.logradouro"
          class="px-2 py-1 shadow rounded text-gray-400 focus:outline-none"
        />
        <p
          class="text-red-400 text-md font-light"
          v-if="
            !$v.form.endereco.logradouro.required &&
            $v.form.endereco.logradouro.$dirty
          "
        >
          Informe seu Logradouro
        </p>
      </div>

      <div class="field flex flex-col">
        <label for="bairro">Bairro</label>
        <input
          type="text"
          name="bairro"
          v-model="form.endereco.bairro"
          class="px-2 py-1 shadow rounded text-gray-400 focus:outline-none"
        />
        <p
          class="text-red-400 text-md font-light"
          v-if="
            !$v.form.endereco.bairro.required && $v.form.endereco.bairro.$dirty
          "
        >
          Informe seu Bairro
        </p>
      </div>

      <div class="field flex flex-col">
        <label for="complemento">Complemento</label>
        <input
          type="text"
          name="complemento"
          v-model="form.endereco.complemento"
          class="px-2 py-1 shadow rounded text-gray-400 focus:outline-none"
        />
      </div>

      <div class="flex flex-col justify-end">
        <button
          type="submit"
          class="bg-green-600 text-white rounded shadow h-8 focus:outline-none"
        >
          Enviar Formulário
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, minValue, minLength } from 'vuelidate/lib/validators'
import { secondNameValidation, minAge, maxAge } from '@/utils/customValidations'
import { currency } from 'vue-currency-input'
import { mask } from 'vue-the-mask'
export default {
  name: 'Form',

  directives: { mask, currency },

  data: () => ({
    form: {
      nome: '',
      idade: '',
      pet: '',
      raca: '',
      rendaMensal: 0,
      endereco: {
        cep: '',
        estado: '',
        cidade: '',
        logradouro: '',
        bairro: '',
        complemento: ''
      }
    },
    pet: {
      tipo: ['cao', 'gato', 'outro'],
      racas: {
        cao: ['pinscher', 'poodle', 'vira lata', 'dobermann', 'pastor alemão'],
        gato: ['persa', 'siames', 'sphynx', 'siberiano', 'bombian']
      }
    }
  }),

  validations: {
    form: {
      nome: { required, secondNameValidation },
      idade: { required, minLength: minLength(10), minAge, maxAge },
      pet: { required },
      raca: { required },
      rendaMensal: { minValue: minValue(1000) },
      endereco: {
        cep: { required, minLength: minLength(9) },
        estado: { required },
        cidade: { required },
        logradouro: { required },
        bairro: { required }
      }
    }
  },

  computed: {
    hasSelectedPet() {
      return this.form.pet !== 'outro'
    }
  },

  methods: {
    searchCep() {
      const formattedCep = this.form.endereco.cep.replace('-', '')

      this.$axios
        .get(`https://viacep.com.br/ws/${formattedCep}/json/`)
        .then(({ data }) => {
          this.form.endereco.estado = data.uf
          this.form.endereco.cidade = data.localidade
          this.form.endereco.logradouro = data.logradouro
          this.form.endereco.bairro = data.bairro
          this.form.endereco.complemento = data.complemento
        })
    },

    submitForm() {
      this.$v.$touch()

      if (this.$v.$invalid) console.log('error')
      else {
        console.log(this.form)
      }
    }
  }
}
</script>
