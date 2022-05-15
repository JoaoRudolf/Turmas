package br.com.projetosaula.springprojetoturmas.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Turma {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;
	private String periodo;
	private int maxAlunos;
	
//	@OneToMany(mappedBy = "turma")
//	private List<Aluno> alunos;
//	
//	@OneToOne
//	@JoinColumn(name = "professor_id")
//	private Professor professor;

	public Turma() { }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

//	public List<Aluno> getAlunos() {
//		return alunos;
//	}
//
//	public void setAlunos(List<Aluno> alunos) {
//		this.alunos = alunos;
//	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getPeriodo() {
		return periodo;
	}

	public void setPeriodo(String periodo) {
		this.periodo = periodo;
	}

	public int getMaxAlunos() {
		return maxAlunos;
	}

	public void setMaxAlunos(int maxAlunos) {
		this.maxAlunos = maxAlunos;
	}

	public Turma getTurma() {
		// TODO Auto-generated method stub
		return null;
	}


//
//	public Professor getProfessor() {
//		return professor;
//	}
//
//	public void setProfessor(Professor professor) {
//		this.professor = professor;
//	}
	
	
}
